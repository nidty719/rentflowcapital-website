"use client";

import { cn } from "@/lib/utils";
import { Calculator, DollarSign, Percent, Home } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import Image from "next/image";

interface LoanCalculatorProps {
  className?: string;
  id?: string;
}

export function LoanCalculator({ className, id }: LoanCalculatorProps) {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [propertyType, setPropertyType] = useState("longTerm");

  // Calculate estimated loan amount
  const calculateLoan = () => {
    const price = parseFloat(purchasePrice.replace(/[^0-9.]/g, ""));
    const rent = parseFloat(monthlyRent.replace(/[^0-9.]/g, ""));
    
    if (!price || !rent) return null;

    const dscr = (rent * 12) / (price * 0.07); // Simple DSCR calculation
    let loanToValue = 0;

    if (dscr >= 1.25) {
      loanToValue = propertyType === "shortTerm" ? 0.75 : 0.80;
    } else if (dscr >= 1.15) {
      loanToValue = propertyType === "shortTerm" ? 0.70 : 0.75;
    } else if (dscr >= 1) {
      loanToValue = 0.65;
    }

    return loanToValue > 0 ? price * loanToValue : null;
  };

  const formatCurrency = (value: string) => {
    const number = value.replace(/[^0-9.]/g, "");
    if (!number) return "";
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Number(number));
  };

  const handlePurchasePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPurchasePrice(formatCurrency(e.target.value));
  };

  const handleMonthlyRentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonthlyRent(formatCurrency(e.target.value));
  };

  const estimatedLoan = calculateLoan();

  return (
    <section id={id} className={cn("relative overflow-hidden bg-calculator-gradient py-20", className)}>
      {/* Clean geometric overlay */}
      <div className="absolute inset-0 overlay-grid" />

      {/* Background image */}
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-20">
        <Image
          src="/images/mansion-interior.png"
          alt="Luxury Interior"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/80 to-background" />
      </div>

      <div className="container relative">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="p-3 rounded-2xl bg-primary/10">
              <Home className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            See How Much You Qualify For
          </h2>
          <p className="text-xl text-muted-foreground">
            Get an instant estimate of your DSCR loan amount
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Calculator Form */}
          <Card className="relative overflow-hidden border-primary/10 shadow-lg animate-fade-in [animation-delay:200ms] card-highlight">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
            <div className="relative p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="purchasePrice">Purchase Price</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-primary" />
                  <Input
                    id="purchasePrice"
                    placeholder="500,000"
                    className="pl-10 border-primary/20 focus:border-primary bg-background/40"
                    value={purchasePrice}
                    onChange={handlePurchasePriceChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthlyRent">Expected Monthly Rent</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-primary" />
                  <Input
                    id="monthlyRent"
                    placeholder="4,000"
                    className="pl-10 border-primary/20 focus:border-primary bg-background/40"
                    value={monthlyRent}
                    onChange={handleMonthlyRentChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Property Type</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant={propertyType === "longTerm" ? "default" : "outline"}
                    onClick={() => setPropertyType("longTerm")}
                    className="w-full rounded-full button-glow"
                  >
                    Long Term Rental
                  </Button>
                  <Button
                    variant={propertyType === "shortTerm" ? "default" : "outline"}
                    onClick={() => setPropertyType("shortTerm")}
                    className="w-full rounded-full button-glow"
                  >
                    Short Term Rental
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Results Card */}
          <Card className="relative overflow-hidden border-primary/10 shadow-lg animate-fade-in [animation-delay:400ms] card-highlight">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90" />
            <div className="relative p-8 text-primary-foreground space-y-6">
              <div className="flex items-center justify-center">
                <div className="p-3 rounded-full bg-white/10">
                  <Calculator className="h-8 w-8" />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">Estimated Loan Amount</h3>
                <div className="text-5xl font-bold mb-4">
                  {estimatedLoan ? formatCurrency(estimatedLoan.toString()) : '$0'}
                </div>
                <p className="text-primary-foreground/90 mb-6">
                  Based on {propertyType === "longTerm" ? "long-term rental" : "short-term rental"} DSCR calculation
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90 rounded-full shadow-lg button-glow"
                  asChild
                >
                  <a href="#apply">Apply Now & Lock Your Rate</a>
                </Button>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h4 className="font-semibold mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-white/10">
                      <Percent className="h-4 w-4" />
                    </div>
                    Rates from 6.99%
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-white/10">
                      <DollarSign className="h-4 w-4" />
                    </div>
                    No tax returns required
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-white/10">
                      <Calculator className="h-4 w-4" />
                    </div>
                    Close in as little as 21 days
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
} 