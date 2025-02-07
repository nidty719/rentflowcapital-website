import { cn } from "@/lib/utils";
import { Building2, Calculator, DollarSign, TrendingUp, Users, Wallet } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface InvestorStoryProps {
  className?: string;
}

export function InvestorStory({ className }: InvestorStoryProps) {
  const benefits = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "No Income Requirements",
      description: "Focus on property performance, not your W-2 income or tax returns."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scale Faster",
      description: "Acquire multiple properties without your personal income limiting you."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Any Strategy Welcome",
      description: "From Airbnb to multi-family, we support various investment approaches."
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Competitive Rates",
      description: "Get institutional-grade financing at market-leading rates."
    }
  ];

  return (
    <section className={cn("py-16 px-4 md:px-6 bg-muted/50", className)} id="learn-more">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Story Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Your Journey to Real Estate Success
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Discover how DSCR loans are changing the game for real estate investors
              </p>
            </div>

            <div className="prose prose-lg dark:prose-invert">
              <p>
                Meet Sarah, a successful real estate investor who started just like you. She had a vision 
                of building a diverse portfolio but faced a common challenge: traditional lenders kept 
                focusing on her W-2 income, limiting her growth potential.
              </p>

              <h3>The Traditional Lending Challenge</h3>
              <p>
                Despite having profitable properties generating strong cash flow, Sarah found herself 
                hitting walls with conventional loans. Banks wanted to see more personal income, 
                endless tax returns, and employment history. Her investment properties were performing 
                well, but that didn't seem to matter.
              </p>

              <h3>Discovering DSCR Loans</h3>
              <p>
                Everything changed when Sarah discovered DSCR lending. Instead of focusing on her 
                personal income, lenders looked at what mattered most: the property's ability to 
                generate rental income. This opened up a world of possibilities.
              </p>

              <h3>Scaling Her Portfolio</h3>
              <p>
                With DSCR loans, Sarah was able to:
              </p>
              <ul>
                <li>Acquire properties based on their merit, not her personal income</li>
                <li>Scale from 2 to 10 properties in just 18 months</li>
                <li>Diversify into both long-term rentals and Airbnb properties</li>
                <li>Maintain clean, separate finances between properties</li>
              </ul>

              <h3>The Power of Property-Based Lending</h3>
              <p>
                Today, Sarah manages a thriving portfolio of residential and short-term rental 
                properties. DSCR loans allowed her to focus on what she does best: finding great 
                deals and maximizing property performance.
              </p>
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="lg:sticky lg:top-8 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Card */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ready to Start Your Journey?</h3>
                <p className="mb-4">
                  Join successful investors like Sarah and start scaling your portfolio with DSCR loans.
                </p>
                <a 
                  href="#apply" 
                  className="inline-block bg-background text-foreground px-4 py-2 rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  Apply Now →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 