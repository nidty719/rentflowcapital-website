"use client";

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';

interface FormData {
  // Address Section
  address: string;
  propertyType: 'House' | 'Condo';
  numberOfUnits: '1' | '2' | '3' | '4';
  propertyCondition: 'New (C1)' | 'Like New (C2)' | 'Average (C3)' | 'Maintenance Needed (C4)' | 'Unlivable (C5)';
  
  // Loan Detail Section
  loanType: 'Purchase' | 'Cash-Out Refinance' | 'Rate & Term Refinance';
  isShortTerm: 'true' | 'false';
  isRented: 'true' | 'false';
  estimatedMonthlyRent: number;
  
  // Loan Values Section
  estimatedPropertyValue: number;
  loanToValue: number;
  loanAmount: number;
  prepaymentPenalty: '0' | '1' | '3' | '5' | '5F';
  discountPoints: '0' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3';
  brokerProcessingFee: number;
  brokerYSP: '0' | '0.25' | '0.5' | '0.75' | '1' | '1.25' | '1.5' | '1.75' | '2';
  borrowerPaidPoints: number;
  
  // Cost Section
  monthlyTaxes: number;
  monthlyAssociationDues: number;
  monthlyHazardInsurance: number;
  monthlyFloodInsurance: number;
  titleClosingFees: number;
  liensMortgagesPayoffs: number;
  
  // Borrower Section
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  creditScore: number;
}

const CalculatorPage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    // Initialize with default values
    address: '',
    propertyType: 'House',
    numberOfUnits: '1',
    propertyCondition: 'Average (C3)',
    loanType: 'Purchase',
    isShortTerm: 'false',
    isRented: 'false',
    estimatedMonthlyRent: 0,
    estimatedPropertyValue: 0,
    loanToValue: 0,
    loanAmount: 0,
    prepaymentPenalty: '5',
    discountPoints: '1',
    brokerProcessingFee: 0,
    brokerYSP: '0.5',
    borrowerPaidPoints: 0,
    monthlyTaxes: 0,
    monthlyAssociationDues: 0,
    monthlyHazardInsurance: 0,
    monthlyFloodInsurance: 0,
    titleClosingFees: 0,
    liensMortgagesPayoffs: 0,
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    creditScore: 0
  });

  const validateStep = (step: number) => {
    const newErrors: string[] = [];
    
    switch (step) {
      case 1:
        if (!formData.address) newErrors.push('Address is required');
        break;
      case 2:
        if (!formData.estimatedMonthlyRent) newErrors.push('Estimated Monthly Rent is required');
        break;
      case 3:
        if (!formData.estimatedPropertyValue) newErrors.push('Estimated Property Value is required');
        if (!formData.loanToValue) newErrors.push('Loan to Value is required');
        if (!formData.loanAmount) newErrors.push('Loan Amount is required');
        break;
      case 4:
        if (!formData.monthlyTaxes) newErrors.push('Monthly Taxes is required');
        if (!formData.monthlyHazardInsurance) newErrors.push('Monthly Hazard Insurance is required');
        break;
      case 5:
        if (!formData.email) newErrors.push('Email is required');
        if (!formData.firstName) newErrors.push('First Name is required');
        if (!formData.lastName) newErrors.push('Last Name is required');
        if (!formData.phone) newErrors.push('Phone is required');
        if (!formData.creditScore) newErrors.push('Credit Score is required');
        // Validate email format
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.push('Please enter a valid email address');
        }
        // Validate phone format
        if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
          newErrors.push('Please enter a valid 10-digit phone number');
        }
        break;
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleNext = async () => {
    if (validateStep(currentStep)) {
      if (currentStep === 5) {
        try {
          // Get IP address from a service
          const ipResponse = await fetch('https://api.ipify.org?format=json');
          const ipData = await ipResponse.json();

          // Prepare submission data
          const submissionData = {
            ...formData,
            ipAddress: ipData.ip,
            submissionDate: new Date().toISOString(),
          };

          // Submit the data
          const response = await fetch('https://workflows.datadrivenwebscraping.com/webhook/rentflow-calc-submission', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(submissionData),
          });

          if (!response.ok) {
            throw new Error('Failed to submit form');
          }

          // Save form data and navigate to results
          sessionStorage.setItem('calculatorData', JSON.stringify(formData));
          router.push('/calculator/results');
        } catch (error) {
          setErrors(['There was an error submitting your information. Please try again.']);
          console.error('Submission error:', error);
        }
      } else {
        setCurrentStep(prev => Math.min(prev + 1, 5));
        setErrors([]);
      }
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setErrors([]);
  };

  const handleStepClick = (stepIndex: number) => {
    if (stepIndex < currentStep) {
      setCurrentStep(stepIndex);
      setErrors([]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? (value === '' ? 0 : parseFloat(value)) : value
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#1a1060] mb-6">Property Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter property address"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <button
                      className={`px-4 py-2 rounded-lg ${
                        formData.propertyType === 'House'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, propertyType: 'House' }))}
                    >
                      House
                    </button>
                    <button
                      className={`px-4 py-2 rounded-lg ${
                        formData.propertyType === 'Condo'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, propertyType: 'Condo' }))}
                    >
                      Condo
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Units <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    {['1', '2', '3', '4'].map(units => (
                      <button
                        key={units}
                        className={`px-4 py-2 rounded-lg ${
                          formData.numberOfUnits === units
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, numberOfUnits: units as FormData['numberOfUnits'] }))}
                      >
                        {units}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Condition <span className="text-red-500">*</span>
                </label>
                <select
                  name="propertyCondition"
                  value={formData.propertyCondition}
                  onChange={(e) => setFormData(prev => ({ ...prev, propertyCondition: e.target.value as FormData['propertyCondition'] }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="New (C1)">New (C1)</option>
                  <option value="Like New (C2)">Like New (C2)</option>
                  <option value="Average (C3)">Average (C3)</option>
                  <option value="Maintenance Needed (C4)">Maintenance Needed (C4)</option>
                  <option value="Unlivable (C5)">Unlivable (C5)</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1a1060] mb-4 sm:mb-6">Loan Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Type <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Purchase', 'Cash-Out Refinance', 'Rate & Term Refinance'].map(type => (
                    <button
                      key={type}
                      className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${
                        formData.loanType === type
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, loanType: type as FormData['loanType'] }))}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Is this a Short Term or Vacation Rental? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      formData.isShortTerm === 'false'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, isShortTerm: 'false' }))}
                  >
                    No
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      formData.isShortTerm === 'true'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, isShortTerm: 'true' }))}
                  >
                    Yes
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Is this property rented? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      formData.isRented === 'false'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, isRented: 'false' }))}
                  >
                    No
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      formData.isRented === 'true'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, isRented: 'true' }))}
                  >
                    Yes
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estimated Monthly Rent <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    name="estimatedMonthlyRent"
                    value={formData.estimatedMonthlyRent || ''}
                    onChange={handleInputChange}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1a1060] mb-4 sm:mb-6">Loan Values</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Estimated Property Value <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    name="estimatedPropertyValue"
                    value={formData.estimatedPropertyValue || ''}
                    onChange={handleInputChange}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Loan to Value (LTV) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="loanToValue"
                    value={formData.loanToValue || ''}
                    onChange={(e) => {
                      const ltv = Math.min(Math.max(0, parseFloat(e.target.value) || 0), 100);
                      const newLoanAmount = (formData.estimatedPropertyValue * ltv) / 100;
                      setFormData(prev => ({
                        ...prev,
                        loanToValue: ltv,
                        loanAmount: newLoanAmount
                      }));
                    }}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="0"
                    min="0"
                    max="100"
                  />
                  <span className="absolute left-3 top-2 text-gray-500">%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Amount <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <input
                    type="number"
                    name="loanAmount"
                    value={formData.loanAmount || ''}
                    readOnly
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    placeholder="0"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">Automatically calculated based on Property Value and LTV</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prepayment Penalty <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {['0', '1', '3', '5', '5F'].map(penalty => (
                    <button
                      key={penalty}
                      className={`px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base ${
                        formData.prepaymentPenalty === penalty
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, prepaymentPenalty: penalty as FormData['prepaymentPenalty'] }))}
                    >
                      {penalty}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#1a1060] mb-6">Property Costs</h2>
            
            <div className="space-y-4">
              {[
                { label: 'Monthly Taxes', name: 'monthlyTaxes' },
                { label: 'Monthly Association Dues', name: 'monthlyAssociationDues' },
                { label: 'Monthly Hazard Insurance', name: 'monthlyHazardInsurance' },
                { label: 'Monthly Flood Insurance', name: 'monthlyFloodInsurance' },
                { label: 'Title + Closing Fees', name: 'titleClosingFees' },
                { label: 'Liens, Mortgages, Payoffs', name: 'liensMortgagesPayoffs' }
              ].map(field => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <input
                      type="number"
                      name={field.name}
                      value={formData[field.name as keyof FormData] || ''}
                      onChange={handleInputChange}
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      placeholder="0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#1a1060] mb-6">Borrower Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="First name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Credit Score <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="creditScore"
                  value={formData.creditScore}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your credit score"
                  min="300"
                  max="850"
                  required
                />
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <p>By clicking "See Pricing Results", you agree to RentFlow Capital's Terms of Service and Privacy Policy and consent to be contacted about your loan inquiry via SMS, phone calls, and AI-powered communications, including automated technology.</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1060] mb-6">
              DSCR Loan Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Get an instant quote for your investment property
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8">
            <div className="flex flex-wrap gap-2 sm:gap-0 sm:flex-nowrap sm:justify-between mb-6 sm:mb-8">
              {['Address', 'Loan Detail', 'Loan Values', 'Cost', 'Borrower'].map((step, index) => (
                <button
                  key={step}
                  onClick={() => handleStepClick(index + 1)}
                  className={`flex items-center cursor-pointer transition-colors text-xs sm:text-sm ${
                    index < currentStep - 1
                      ? 'text-indigo-600 hover:text-indigo-800'
                      : index === currentStep - 1
                      ? 'text-[#1a1060]'
                      : 'text-gray-400'
                  }`}
                >
                  <span className="font-medium">{step}</span>
                  {index < 4 && (
                    <div
                      className={`h-0.5 w-4 sm:w-8 mx-1 sm:mx-2 ${
                        index < currentStep - 1 ? 'bg-indigo-600' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </button>
              ))}
            </div>

            {renderStep()}

            {errors.length > 0 && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <ul className="list-disc list-inside text-red-600 text-sm">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 sm:mt-8 flex justify-between">
              <button
                onClick={handlePrevious}
                className={`px-4 sm:px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm sm:text-base ${
                  currentStep === 1 ? 'invisible' : ''
                }`}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-4 sm:px-6 py-2 bg-[#1a1060] text-white rounded-lg hover:bg-[#2a2070] text-sm sm:text-base"
              >
                {currentStep === 5 ? 'See Pricing Results' : 'Next'}
              </button>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              This Proposal is nonbinding and is not a Loan Estimate as defined by the TILA-RESPA Integrated Disclosure Rule, or a binding estimate or offer as defined by any other state or federal rule or regulation.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CalculatorPage; 