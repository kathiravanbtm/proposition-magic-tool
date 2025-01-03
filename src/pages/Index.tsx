import ValuePropositionForm from "@/components/ValuePropositionForm";

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
      </div>
    </div>
  );
};

export default Index;