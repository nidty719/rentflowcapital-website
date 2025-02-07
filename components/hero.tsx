"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  capsuleText: string;
  capsuleLink: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export function Hero(props: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-hero-gradient py-20 md:py-32">
      {/* Clean geometric overlay */}
      <div className="absolute inset-0 overlay-grid" />
      
      {/* Background image with clean overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/luxury-house.png"
          alt="Luxury Real Estate"
          fill
          className="object-cover opacity-20"
          priority
          quality={100}
        />
        <div className="absolute inset-0 overlay-fade" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Link
            href={props.capsuleLink}
            className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20 animate-fade-in"
          >
            {props.capsuleText}
            <span className="ml-2">→</span>
          </Link>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in [animation-delay:200ms]">
            {props.title}
          </h1>

          <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl animate-fade-in [animation-delay:400ms]">
            {props.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in [animation-delay:600ms]">
            <Link
              href={props.primaryCtaLink}
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-8 shadow-lg transition-all hover:shadow-primary/25 bg-primary text-primary-foreground hover:bg-primary/90 button-glow"
              )}
            >
              {props.primaryCtaText}
            </Link>
            <Link
              href={props.secondaryCtaLink}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-8 bg-background/50 hover:bg-background/80 button-glow"
              )}
            >
              {props.secondaryCtaText}
            </Link>
          </div>
        </div>
      </div>

      {/* Clean section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
