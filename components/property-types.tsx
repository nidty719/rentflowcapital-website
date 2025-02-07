import { cn } from "@/lib/utils";
import { Building2, Bed, Home, Hotel } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface PropertyTypeProps {
  className?: string;
}

export function PropertyTypes({ className }: PropertyTypeProps) {
  const propertyTypes = [
    {
      icon: <Hotel className="h-8 w-8" />,
      title: "Short-Term Rentals",
      description: "Perfect for Airbnb and vacation rentals",
      color: "bg-gradient-to-br from-blue-500/10 to-blue-500/30 hover:to-blue-500/40",
      features: ["Up to 75% LTV", "Use Airbnb revenue", "Rates from 6.99%"]
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "PadSplits & Co-Living",
      description: "Maximize returns with room-by-room rentals",
      color: "bg-gradient-to-br from-purple-500/10 to-purple-500/30 hover:to-purple-500/40",
      features: ["Up to 70% LTV", "Higher cash flow", "Creative strategies welcome"]
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Long-Term Rentals",
      description: "Traditional single and multi-family properties",
      color: "bg-gradient-to-br from-green-500/10 to-green-500/30 hover:to-green-500/40",
      features: ["Up to 80% LTV", "30-year terms", "Cash-out refinance"]
    },
    {
      icon: <Bed className="h-8 w-8" />,
      title: "Mixed-Use Properties",
      description: "Combine residential and commercial spaces",
      color: "bg-gradient-to-br from-orange-500/10 to-orange-500/30 hover:to-orange-500/40",
      features: ["Flexible terms", "Value-add opportunities", "Creative financing"]
    }
  ];

  return (
    <section className={cn("py-16 px-4 md:px-6", className)} id="property-types">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Financing for Every Strategy
          </h2>
          <p className="text-xl text-muted-foreground">
            Whether you're into short-term rentals or traditional leases, we've got you covered
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyTypes.map((type, index) => (
            <Card key={index} className={cn("transition-all duration-300", type.color)}>
              <CardContent className="pt-6">
                <div className="mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 