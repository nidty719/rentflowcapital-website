import { FeatureGrid } from "@/components/features";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { InvestorStory } from "@/components/investor-story";
import { LoanCalculator } from "@/components/loan-calculator";
import { PropertyTypes } from "@/components/property-types";
import { QuickApplyForm } from "@/components/quick-apply-form";
import { FAQSection } from "@/components/faq-section";
import { ComponentIcon, DollarSign, Clock, Shield } from "lucide-react";

export default function IndexPage() {
  return (
    <>
      <Hero
        capsuleText="Fast DSCR Lending"
        capsuleLink="#calculator"
        title="Get Your Real Estate Investment Funded"
        subtitle="Quick approvals, competitive rates, and no tax returns required. Perfect for real estate investors."
        primaryCtaText="Calculate Your Loan"
        primaryCtaLink="#calculator"
        secondaryCtaText="Apply Now"
        secondaryCtaLink="#apply"
      />

      <LoanCalculator id="calculator" />

      <PropertyTypes />

      <div id="features" />
      <FeatureGrid
        title="Why Choose Rent Flow Capital"
        subtitle="We make DSCR lending simple, fast, and accessible for real estate investors."
        items={[
          {
            icon: <DollarSign className="h-12 w-12" />,
            title: "No Tax Returns",
            description: "Qualify based on property cash flow, not your personal income.",
          },
          {
            icon: <Clock className="h-12 w-12" />,
            title: "Quick Closing",
            description: "Close your loan in as little as 21 days.",
          },
          {
            icon: <Shield className="h-12 w-12" />,
            title: "Competitive Rates",
            description: "Get the best rates for your investment property.",
          },
          {
            icon: <ComponentIcon className="h-12 w-12" />,
            title: "Flexible Terms",
            description: "30-year terms with various prepayment options.",
          },
        ]}
        className="bg-muted/50"
      />

      <InvestorStory />

      <HowItWorks className="bg-muted/50" />

      <FAQSection />

      <QuickApplyForm />
    </>
  );
}
