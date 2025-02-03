"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  propertyPrice: string;
  expectedRent: string;
  propertyTaxes: string;
  insurance: string;
  propertyAddress: string;
}

export function DSCRCalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    propertyPrice: "",
    expectedRent: "",
    propertyTaxes: "",
    insurance: "",
    propertyAddress: "",
  });
  const [calculatedDSCR, setCalculatedDSCR] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateDSCR = () => {
    // Convert string values to numbers
    const monthlyRent = parseFloat(formData.expectedRent);
    const propertyPrice = parseFloat(formData.propertyPrice);
    const annualTaxes = parseFloat(formData.propertyTaxes);
    const annualInsurance = parseFloat(formData.insurance);

    // Estimate monthly mortgage payment (assuming 30-year term at 7% interest)
    const interestRate = 0.07 / 12; // Monthly interest rate
    const numberOfPayments = 30 * 12; // 30 years in months
    const loanAmount = propertyPrice * 0.75; // Assuming 75% LTV

    const monthlyMortgage =
      (loanAmount *
        (interestRate * Math.pow(1 + interestRate, numberOfPayments))) /
      (Math.pow(1 + interestRate, numberOfPayments) - 1);

    // Calculate monthly expenses
    const monthlyTaxes = annualTaxes / 12;
    const monthlyInsurance = annualInsurance / 12;
    const totalMonthlyExpenses = monthlyMortgage + monthlyTaxes + monthlyInsurance;

    // Calculate DSCR
    const dscr = monthlyRent / totalMonthlyExpenses;
    setCalculatedDSCR(dscr);
  };

  const renderPropertyInfo = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="propertyAddress">Property Address</Label>
        <Input
          id="propertyAddress"
          name="propertyAddress"
          value={formData.propertyAddress}
          onChange={handleInputChange}
          placeholder="123 Main St, City, State"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="propertyPrice">Purchase Price</Label>
        <Input
          id="propertyPrice"
          name="propertyPrice"
          value={formData.propertyPrice}
          onChange={handleInputChange}
          placeholder="500000"
          type="number"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="expectedRent">Expected Monthly Rent</Label>
        <Input
          id="expectedRent"
          name="expectedRent"
          value={formData.expectedRent}
          onChange={handleInputChange}
          placeholder="3000"
          type="number"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="propertyTaxes">Annual Property Taxes</Label>
          <Input
            id="propertyTaxes"
            name="propertyTaxes"
            value={formData.propertyTaxes}
            onChange={handleInputChange}
            placeholder="5000"
            type="number"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="insurance">Annual Insurance</Label>
          <Input
            id="insurance"
            name="insurance"
            value={formData.insurance}
            onChange={handleInputChange}
            placeholder="2000"
            type="number"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderPersonalInfo = () => (
    <div className="space-y-4">
      <p className="text-lg text-center mb-6">
        Enter your contact information to see your DSCR calculation results
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="John"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Doe"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="(555) 555-5555"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="john@example.com"
          required
        />
      </div>
    </div>
  );

  const renderResults = () => (
    <div className="space-y-8 text-center">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Your DSCR Calculation Results</h3>
        <div className="p-8 bg-gray-50 rounded-lg max-w-md mx-auto">
          <p className="text-lg font-semibold mb-2">Debt Service Coverage Ratio</p>
          <p className="text-5xl font-bold text-primary mb-4">
            {calculatedDSCR?.toFixed(2)}
          </p>
          <p className="text-lg text-muted-foreground">
            {calculatedDSCR && calculatedDSCR >= 1.25 ? (
              <>
                <span className="text-green-600 font-semibold">Congratulations!</span>
                <br />Your property likely qualifies for DSCR financing.
              </>
            ) : (
              <>
                <span className="text-blue-600 font-semibold">Let's Explore Options</span>
                <br />We'll contact you to discuss alternative financing solutions.
              </>
            )}
          </p>
        </div>
        <div className="mt-8">
          <p className="text-lg mb-6">
            Thank you, {formData.firstName}! Our team will contact you shortly to discuss your financing options.
          </p>
          <Button onClick={() => setStep(1)} variant="outline">
            Start New Calculation
          </Button>
        </div>
      </div>
    </div>
  );

  const handleNext = () => {
    if (step === 1) {
      calculateDSCR();
    }
    setStep(step + 1);
  };

  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">DSCR Loan Calculator</CardTitle>
          {step === 1 && (
            <p className="text-center text-muted-foreground">
              Enter your property details to get started
            </p>
          )}
        </CardHeader>
        <CardContent>
          {step === 1 && renderPropertyInfo()}
          {step === 2 && renderPersonalInfo()}
          {step === 3 && renderResults()}
          
          {step < 3 && (
            <div className="mt-6 flex justify-between">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                >
                  Previous
                </Button>
              )}
              <Button
                className={step === 1 ? "w-full" : ""}
                onClick={handleNext}
              >
                {step === 1 ? "Next" : "Get Results"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 