import { cn } from "@/lib/utils";
import { ClipboardCheck, Calculator, FileCheck, Rocket } from "lucide-react";

interface HowItWorksProps {
  className?: string;
}

export function HowItWorks({ className }: HowItWorksProps) {
  const steps = [
    {
      number: "01",
      icon: <ClipboardCheck className="h-8 w-8" />,
      title: "Quick Application",
      description: "Fill out our simple form with your property details and investment strategy.",
    },
    {
      number: "02",
      icon: <Calculator className="h-8 w-8" />,
      title: "Get Your Terms",
      description: "Receive competitive loan terms based on your property's cash flow within 24 hours.",
    },
    {
      number: "03",
      icon: <FileCheck className="h-8 w-8" />,
      title: "Document Collection",
      description: "Upload required documents through our secure portal. No tax returns needed!",
    },
    {
      number: "04",
      icon: <Rocket className="h-8 w-8" />,
      title: "Close & Fund",
      description: "Close in as little as 21 days and start growing your portfolio.",
    }
  ];

  return (
    <section className={cn("py-16 px-4 md:px-6", className)} id="how-it-works">
      <div className="container max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-xl text-muted-foreground">
            Get funded quickly with our streamlined approval process
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg bg-card border border-border/50 group hover:border-primary/50 transition-colors"
            >
              {/* Step number */}
              <div className="absolute -right-3 -top-3 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                {step.number}
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 