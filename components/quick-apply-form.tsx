"use client";

import { cn } from "@/lib/utils";
import { Building2, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface QuickApplyFormProps {
  className?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyDetails: string;
}

export function QuickApplyForm({ className }: QuickApplyFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyDetails: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to webhook
      const response = await fetch('https://workflows.datadrivenwebscraping.com/webhook/b87c58d8-75b0-4fb1-80d1-5ddc9578821a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        propertyDetails: "",
      });

      // Show success message or redirect
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <section className={cn("py-16 px-4 md:px-6", className)} id="apply">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Quick Application</h2>
                <p className="text-muted-foreground">
                  Get pre-qualified in minutes with no impact to your credit
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="pl-10"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="pl-10"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="pl-10"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertyDetails">Property Details</Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Textarea
                    id="propertyDetails"
                    placeholder="Tell us about the property you're looking to finance..."
                    className="pl-10 min-h-[100px]"
                    required
                    value={formData.propertyDetails}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Get Pre-Qualified Now"}
              </Button>
            </form>
          </Card>

          {/* Benefits Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Apply Now?</h3>
              <div className="grid gap-4">
                <Card className="p-4 border-primary/50">
                  <CardContent className="p-0">
                    <h4 className="font-semibold mb-2">Quick Response</h4>
                    <p className="text-muted-foreground">
                      Get your loan terms within 24 hours of applying
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-4 border-primary/50">
                  <CardContent className="p-0">
                    <h4 className="font-semibold mb-2">No Credit Impact</h4>
                    <p className="text-muted-foreground">
                      Our pre-qualification process won't affect your credit score
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="p-4 border-primary/50">
                  <CardContent className="p-0">
                    <h4 className="font-semibold mb-2">Lock Your Rate</h4>
                    <p className="text-muted-foreground">
                      Current rates starting at 6.99% - lock in your rate today
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h4 className="font-semibold mb-4">What Happens Next?</h4>
              <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                <li>We'll review your application within 24 hours</li>
                <li>You'll receive custom loan terms based on your property</li>
                <li>Our team will guide you through document collection</li>
                <li>Close your loan in as little as 21 days</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 