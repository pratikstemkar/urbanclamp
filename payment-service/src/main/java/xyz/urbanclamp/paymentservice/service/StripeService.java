package xyz.urbanclamp.paymentservice.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import xyz.urbanclamp.basedomains.dto.StripeResponseDTO;
import xyz.urbanclamp.paymentservice.dto.PaymentRequestDTO;

@Service
public class StripeService {
    @Value("${stripe.secretKey}")
    private String secretKey;

    public StripeResponseDTO checkoutBooking(PaymentRequestDTO paymentRequestDTO) {
        Stripe.apiKey = secretKey;

        SessionCreateParams.LineItem.PriceData.ProductData productData = SessionCreateParams.LineItem.PriceData.ProductData.builder()
                .setName(paymentRequestDTO.getName())
                .build();

        SessionCreateParams.LineItem.PriceData priceData = SessionCreateParams.LineItem.PriceData.builder()
                .setUnitAmount(paymentRequestDTO.getAmount())
                .setCurrency(paymentRequestDTO.getCurrency() == null ? "USD" : paymentRequestDTO.getCurrency())
                .setProductData(productData)
                .build();

        SessionCreateParams.LineItem lineItem = SessionCreateParams.LineItem.builder()
                .setQuantity(paymentRequestDTO.getQuantity())
                .setPriceData(priceData)
                .build();

        SessionCreateParams params = SessionCreateParams.builder()
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .putMetadata("bookingId", String.valueOf(paymentRequestDTO.getBookingId()))
                .setSuccessUrl("https://urbanclamp.xyz/payments/success")
                .setCancelUrl("https://urbanclamp.xyz/payments/cancel")
                .addLineItem(lineItem)
                .build();

        Session session = null;

        try {
            session = Session.create(params);
        } catch (StripeException e) {
            System.out.println(e.getMessage());
            return StripeResponseDTO.builder()
                    .status("FAILURE")
                    .message(e.getMessage())
                    .build();
        }

        return StripeResponseDTO.builder()
                .status("SUCCESS")
                .message("Payment session created!")
                .bookingId(session.getMetadata().get("bookingId"))
                .sessionId(session.getId())
                .sessionUrl(session.getUrl())
                .build();
    }
}
