import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface FormData {
  targetAudience: string;
  solutions: string;
  uniqueSellingPoints: string;
  benefits: string;
}

const ValuePropositionForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    targetAudience: "",
    solutions: "",
    uniqueSellingPoints: "",
    benefits: "",
  });
  const [generatedProposition, setGeneratedProposition] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateValueProposition = () => {
    const proposition = `For ${formData.targetAudience} who need ${
      formData.solutions
    }, our solution ${formData.uniqueSellingPoints} that provides ${
      formData.benefits
    }.`;
    setGeneratedProposition(proposition);
    toast.success("Value proposition generated!");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedProposition);
    toast.success("Copied to clipboard!");
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">Target Audience</h2>
            <Textarea
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleInputChange}
              placeholder="Describe your target audience (e.g., small business owners)"
              className="min-h-[100px]"
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">Solutions</h2>
            <Textarea
              name="solutions"
              value={formData.solutions}
              onChange={handleInputChange}
              placeholder="What solutions do you offer? (e.g., streamlined accounting software)"
              className="min-h-[100px]"
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">Unique Selling Points</h2>
            <Textarea
              name="uniqueSellingPoints"
              value={formData.uniqueSellingPoints}
              onChange={handleInputChange}
              placeholder="What makes your solution unique? (e.g., uses AI-powered automation)"
              className="min-h-[100px]"
            />
          </div>
        );
      case 4:
        return (
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
            <Textarea
              name="benefits"
              value={formData.benefits}
              onChange={handleInputChange}
              placeholder="What are the key benefits? (e.g., saves 10 hours per week)"
              className="min-h-[100px]"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card className="p-6">
        {step <= 4 ? (
          <>
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`h-2 flex-1 mx-1 rounded ${
                      s <= step ? "bg-blue-500" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
              <div className="text-center text-sm text-gray-500">
                Step {step} of 4
              </div>
            </div>
            {renderStep()}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button onClick={prevStep} variant="outline">
                  Previous
                </Button>
              )}
              {step < 4 ? (
                <Button onClick={nextStep} className="ml-auto">
                  Next
                </Button>
              ) : (
                <Button onClick={generateValueProposition} className="ml-auto">
                  Generate
                </Button>
              )}
            </div>
          </>
        ) : (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">
              Your Value Proposition
            </h2>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-lg">{generatedProposition}</p>
            </div>
            <div className="flex justify-between">
              <Button onClick={() => setStep(1)} variant="outline">
                Start Over
              </Button>
              <Button onClick={copyToClipboard}>Copy to Clipboard</Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ValuePropositionForm;