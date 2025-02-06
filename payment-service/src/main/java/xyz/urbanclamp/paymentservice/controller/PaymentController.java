package xyz.urbanclamp.paymentservice.controller;

import com.stripe.exception.SignatureVerificationException;
import com.stripe.model.Event;
import com.stripe.model.EventDataObjectDeserializer;
import com.stripe.model.StripeObject;
import com.stripe.model.checkout.Session;
import com.stripe.net.Webhook;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.json.JsonParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.urbanclamp.basedomains.dto.StripeResponseDTO;
import xyz.urbanclamp.paymentservice.dto.PaymentRequestDTO;
import xyz.urbanclamp.paymentservice.kafka.PaymentProducer;
import xyz.urbanclamp.paymentservice.service.StripeService;

import java.util.Optional;

@RestController
@RequestMapping("/api/payments")
@RequiredArgsConstructor
public class PaymentController {
    private final StripeService stripeService;
    private final PaymentProducer paymentProducer;

    @Value("${stripe.webhookSecret}")
    private String webhookSecret;

    @PostMapping
    public ResponseEntity<StripeResponseDTO> checkoutPayment(@RequestBody PaymentRequestDTO paymentRequestDTO) {
        StripeResponseDTO stripeResponseDTO = stripeService.checkoutBooking(paymentRequestDTO);
        return ResponseEntity.ok(stripeResponseDTO);
    }

    @PostMapping("/webhook")
    public ResponseEntity<?> handleWebhook(@RequestBody String payload,
                                           @RequestHeader("Stripe-Signature") String sigHeader) {
        Event event;
        try {
            event = Webhook.constructEvent(payload, sigHeader, webhookSecret);
        } catch (JsonParseException e) {
            System.out.println("Webhook error while parsing request.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid JSON");
        } catch (SignatureVerificationException e) {
            System.out.println("Webhook error: Signature verification failed.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid signature");
        }

        EventDataObjectDeserializer dataObjectDeserializer = event.getDataObjectDeserializer();
        Optional<StripeObject> stripeObjectOptional = dataObjectDeserializer.getObject();

        if (stripeObjectOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Deserialization failed");
        }

        StripeObject stripeObject = stripeObjectOptional.get();
        Session session = (Session) stripeObject;

        switch (event.getType()) {
            case "payment_intent.succeeded":
                System.out.println("Payment for  succeeded.");
                break;

            case "payment_intent.payment_failed":
                System.out.println("Payment method failed intent: ");
                paymentProducer.sendPaymentFailed(StripeResponseDTO.builder().status("FAILED").sessionId(session.getId()).sessionUrl(session.getUrl()).build());
                break;

            case "checkout.session.expired":
                System.out.println("Payment session expired: ");
                paymentProducer.sendPaymentFailed(StripeResponseDTO.builder().status("FAILED").sessionId(session.getId()).sessionUrl(session.getUrl()).build());
                break;

            case "checkout.session.completed":
                System.out.println(session.getMetadata().toString());
                paymentProducer.sendPaymentSuccess(
                        StripeResponseDTO.builder()
                                .status("SUCCESS")
                                .sessionId(session.getId())
                                .sessionUrl(session.getUrl())
                                .bookingId(session.getMetadata().get("bookingId"))
                                .build()
                );
                break;

            default:
                System.out.println("Unhandled event type: " + event.getType());
                break;
        }

        return ResponseEntity.ok("Webhook received");
    }
}
