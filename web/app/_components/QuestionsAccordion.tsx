import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function QuestionsAccordion() {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger>What services do you offer?</AccordionTrigger>
                <AccordionContent>
                    We provide a wide range of services, including home
                    cleaning, beauty treatments, plumbing, electrical work, and
                    more.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>How do I book a service?</AccordionTrigger>
                <AccordionContent>
                    Simply visit our website or download our app, select the
                    service you need, choose a date and time, and confirm your
                    booking.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>
                    Are the service providers vetted?
                </AccordionTrigger>
                <AccordionContent>
                    Yes, all our professionals are thoroughly vetted, trained,
                    and background-checked to ensure quality and reliability.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>
                    What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent>
                    We accept various payment methods, including credit/debit
                    cards, net banking, and mobile wallets for your convenience.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>
                    What if I&apos;m not satisfied with the service?
                </AccordionTrigger>
                <AccordionContent>
                    We strive for customer satisfaction. If you&apos;re not
                    happy with the service, please contact our support team for
                    assistance and resolution.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
