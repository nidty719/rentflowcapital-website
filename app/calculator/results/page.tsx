"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface CalculatedRate {
  product: string;
  baseRate: number;
  adjustedRate: number;
  dscr: number;
  principalAndInterest: number;
}

const PricingResultsPage = () => {
  const router = useRouter();
  const [calculatorData, setCalculatorData] = useState<any>(null);
  const [calculatedRates, setCalculatedRates] = useState<CalculatedRate[]>([]);
  const [isSchedulingModalOpen, setIsSchedulingModalOpen] = useState(false);
  const [noLoansAvailable, setNoLoansAvailable] = useState(false);
  const [noLoanReason, setNoLoanReason] = useState<string>('');

  const calculateBaseRate = (creditScore: number, ltv: number) => {
    // Define LTV ranges
    const ltvRanges = [
      { min: 75.01, max: 80, index: 5 },
      { min: 70.01, max: 75, index: 4 },
      { min: 65.01, max: 70, index: 3 },
      { min: 60.01, max: 65, index: 2 },
      { min: 55.01, max: 60, index: 1 },
      { min: 0, max: 55, index: 0 }
    ];

    // Define credit score ranges
    const creditScoreRanges = [
      { min: 760, rates: [6.150, 6.225, 6.350, 6.600, 6.950, 7.350] },
      { min: 740, rates: [6.275, 6.350, 6.475, 6.725, 7.075, 7.475] },
      { min: 720, rates: [6.500, 6.575, 6.700, 6.950, 7.200, 7.600] },
      { min: 700, rates: [6.800, 6.875, 7.000, 7.250, 7.550, 8.150] },
      { min: 680, rates: [7.375, 7.375, 7.375, 7.500, 7.975, 0] }
    ];

    // Find LTV index
    const ltvRange = ltvRanges.find(range => ltv > range.min && ltv <= range.max);
    if (!ltvRange) return null;

    // Find credit score range
    const creditScoreRange = creditScoreRanges.find(range => creditScore >= range.min);
    if (!creditScoreRange) return null;

    return creditScoreRange.rates[ltvRange.index];
  };

  const calculateRateAdjustments = (formData: any) => {
    let adjustments = 0;

    // Rate Structure Adjustments
    const rateStructureAdjustments = {
      '5/6 ARM': 0.000,
      '7/6 ARM': 0.100,
      '30 Year Fixed': 0.200,
    };

    // Loan Size Adjustments
    const loanAmount = formData.loanAmount;
    if (loanAmount >= 2000000) adjustments += 0.750;
    else if (loanAmount >= 1500000) adjustments += 0.250;
    else if (loanAmount >= 200000) adjustments += 0.000;
    else if (loanAmount >= 125000) adjustments += 0.250;
    else if (loanAmount >= 100000) adjustments += 0.500;
    else if (loanAmount >= 75000) adjustments += 1.250;

    // Prepayment Penalty Adjustments
    const prepayMap: { [key: string]: number } = {
      '5': -0.250, // 5/5/5/5/5
      '1': 0.250,  // 3/2/1
      '3': 0.000,  // 5/4/3/2/1
      '0': 1.000,  // 0/0/0
    };
    adjustments += prepayMap[formData.prepaymentPenalty] || 0;

    // Property Type Adjustments
    if (formData.propertyType === 'Condo') adjustments += 0.200;
    if (formData.numberOfUnits !== '1') adjustments += 0.250;

    // Program Type Adjustments
    if (formData.loanType === 'Cash-Out Refinance') adjustments += 0.350;
    if (formData.isShortTerm === 'true') adjustments += 0.250;

    // DSCR Adjustments
    const dscr = formData.estimatedMonthlyRent / formData.monthlyPayment;
    if (dscr >= 1.20) adjustments -= 0.125;

    // LTV Adjustments
    if (formData.loanToValue <= 65) adjustments += 0.500;
    else if (formData.loanToValue >= 65) adjustments += 0.850;

    return adjustments;
  };

  const calculateMonthlyPayment = (loanAmount: number, rate: number, term: number = 360) => {
    const monthlyRate = rate / 100 / 12;
    return loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
  };

  useEffect(() => {
    const hasCalculatorData = sessionStorage.getItem('calculatorData');
    if (!hasCalculatorData) {
      router.push('/calculator');
    } else {
      const data = JSON.parse(hasCalculatorData);
      setCalculatorData(data);

      // Check credit score minimum requirement
      if (data.creditScore < 680) {
        setNoLoansAvailable(true);
        setNoLoanReason('Credit score is below the minimum requirement of 680.');
        return;
      }

      // Check LTV maximum requirement
      if (data.loanToValue > 80) {
        setNoLoansAvailable(true);
        setNoLoanReason('Loan-to-Value ratio exceeds the maximum allowed of 80%.');
        return;
      }

      // Calculate base rate
      const baseRate = calculateBaseRate(data.creditScore, data.loanToValue);
      if (!baseRate) {
        setNoLoansAvailable(true);
        setNoLoanReason('The combination of credit score and LTV does not qualify for any available loan programs.');
        return;
      }

      // Calculate rates for each product
      const products = ['5/6 ARM', '7/6 ARM', '30 Year Fixed'];
      const rates = products.map(product => {
        const baseAdjustment = product === '5/6 ARM' ? 0 : product === '7/6 ARM' ? 0.1 : 0.2;
        const adjustments = calculateRateAdjustments({ ...data, product });
        const adjustedRate = baseRate + baseAdjustment + adjustments;
        const monthlyPayment = calculateMonthlyPayment(data.loanAmount, adjustedRate);
        const dscr = data.estimatedMonthlyRent / monthlyPayment;

        return {
          product,
          baseRate,
          adjustedRate,
          dscr: Number(dscr.toFixed(4)),
          principalAndInterest: monthlyPayment
        };
      });

      // Check if any rates have a DSCR below minimum requirement
      const minDscr = Math.min(...rates.map(rate => rate.dscr));
      if (minDscr < 0.75) {
        setNoLoansAvailable(true);
        setNoLoanReason('The Debt Service Coverage Ratio (DSCR) is below the minimum requirement of 0.75.');
        return;
      }

      setCalculatedRates(rates);
      setNoLoansAvailable(false);
    }
  }, [router]);

  // Add Modal Component
  const SchedulingModal = () => (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center ${isSchedulingModalOpen ? '' : 'hidden'}`}>
      <div className="bg-white rounded-xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={() => setIsSchedulingModalOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="pt-8">
          <iframe 
            src="https://m.intulinks.com/widget/booking/AhkvpJXrcoatWQ6EaNmp" 
            style={{ width: '100%', height: '600px', border: 'none' }}
            id="1ejG4YRNVaHz4yWrgxlD_1740006617336"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1060] mb-6">
              {noLoansAvailable ? 'No Loans Available' : 'Your DSCR Loan Options'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {noLoansAvailable 
                ? noLoanReason
                : 'Based on your property details, here are your potential loan options'
              }
            </p>
          </div>

          {noLoansAvailable ? (
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Unable to Proceed with Loan</h2>
                <p className="text-gray-600 mb-6">{noLoanReason}</p>
                <div className="space-y-4">
                  <button
                    onClick={() => router.push('/calculator')}
                    className="w-full sm:w-auto px-6 py-3 bg-[#1a1060] text-white rounded-lg hover:bg-[#2a2070] transition-colors"
                  >
                    Try Different Parameters
                  </button>
                  <p className="text-sm text-gray-500">
                    Need assistance? <button
                      onClick={() => setIsSchedulingModalOpen(true)}
                      className="text-[#1a1060] hover:underline"
                    >
                      Schedule a consultation
                    </button> with our loan experts.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Loan Summary Section */}
              <div className="mb-8 sm:mb-12 bg-white rounded-xl shadow-lg p-4 sm:p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8 text-center">
                  <div>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">Loan Amount</p>
                    <p className="text-lg sm:text-2xl font-bold text-[#1a1060]">
                      ${calculatorData?.loanAmount.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">LTV</p>
                    <p className="text-lg sm:text-2xl font-bold text-[#1a1060]">
                      {calculatorData?.loanToValue}%
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">Monthly Rent</p>
                    <p className="text-lg sm:text-2xl font-bold text-[#1a1060]">
                      ${calculatorData?.estimatedMonthlyRent.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">Prepayment</p>
                    <p className="text-lg sm:text-2xl font-bold text-[#1a1060]">
                      {calculatorData?.prepaymentPenalty} {calculatorData?.prepaymentPenalty === '5F' ? '' : 'yr'}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">Points</p>
                    <p className="text-lg sm:text-2xl font-bold text-[#1a1060]">1</p>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-20">
                {/* Rate Options */}
                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* For mobile view */}
                    <div className="block sm:hidden">
                      {calculatedRates.map((option, index) => (
                        <div key={index} className="p-4 border-b border-gray-200 last:border-b-0">
                          <div className="mb-2">
                            <span className="text-[#1a1060] font-medium">{option.product}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <div className="text-xs text-gray-600 mb-1">Rate / DSCR</div>
                              <div className="text-sm">{option.adjustedRate.toFixed(3)}% /</div>
                              <div className="text-sm text-gray-600">{option.dscr}</div>
                            </div>
                            <div>
                              <div className="text-xs text-gray-600 mb-1">Principal & Interest</div>
                              <div className="text-sm">${option.principalAndInterest.toFixed(2)}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* For desktop view */}
                    <table className="hidden sm:table w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Loan<br />Product</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Rate / DSCR</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Principal &<br />Interest</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {calculatedRates.map((option, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <span className="text-[#1a1060] font-medium">{option.product}</span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-gray-900">{option.adjustedRate.toFixed(3)}% /</div>
                              <div className="text-gray-600">{option.dscr}</div>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-gray-900">${option.principalAndInterest.toFixed(2)}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="lg:pl-8 xl:pl-12">
                  <div className="bg-[#fff9e7] rounded-3xl p-6 sm:p-8 md:p-12">
                    <div className="text-center mb-6 sm:mb-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <Image
                          src="/icons/chat.svg"
                          alt="Contact"
                          width={24}
                          height={24}
                          className="text-indigo-600 sm:w-8 sm:h-8"
                        />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#1a1060] mb-3 sm:mb-4">
                        Speak with a DSCR Loan Expert
                      </h2>
                      <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                        Our experienced loan officers will help you find the perfect financing solution for your investment property.
                      </p>
                    </div>

                    <div className="space-y-6 text-center">
                      <div>
                        <h3 className="font-semibold text-[#1a1060] mb-2">What to Expect:</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center">
                            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                            Personal consultation to review your options
                          </li>
                          <li className="flex items-center">
                            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                            Customized loan strategy for your goals
                          </li>
                          <li className="flex items-center">
                            <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                            Clear explanation of terms and process
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 mb-4">
                          Typical response time: 5-120 minutes during business hours
                        </p>
                        <button
                          onClick={() => setIsSchedulingModalOpen(true)}
                          className="w-full bg-[#1a1060] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#2a2070] transition-colors"
                        >
                          Schedule Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
      <SchedulingModal />
      <script src="https://m.intulinks.com/js/form_embed.js" async></script>
    </div>
  );
};

export default PricingResultsPage; 