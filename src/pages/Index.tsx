import ValuePropositionForm from "@/components/ValuePropositionForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Value Proposition Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create compelling value propositions by following our simple step-by-step
            process. Perfect for businesses looking to clearly communicate their
            unique value to customers.
          </p>
        </div>
        <ValuePropositionForm />
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md p-6">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What is a value proposition?
              </AccordionTrigger>
              <AccordionContent>
                A value proposition is a clear statement that explains how your product or service solves customers' problems, delivers specific benefits, and tells the ideal customer why they should buy from you and not from the competition.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Why is a value proposition important?
              </AccordionTrigger>
              <AccordionContent>
                A strong value proposition helps you stand out in the market, communicate your unique benefits to potential customers, and increase conversion rates by clearly articulating why customers should choose your product or service.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                How do I create an effective value proposition?
              </AccordionTrigger>
              <AccordionContent>
                To create an effective value proposition, focus on identifying your target audience, understanding their pain points, highlighting your unique solutions and benefits, and communicating these elements clearly and concisely.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                How often should I update my value proposition?
              </AccordionTrigger>
              <AccordionContent>
                You should review and update your value proposition whenever there are significant changes in your market, customer needs, product offerings, or competitive landscape. Regular reviews every 6-12 months are recommended.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Can I have multiple value propositions?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can have different value propositions for different target audiences or product lines. However, ensure each proposition remains clear, specific, and aligned with your overall brand message.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Index;