"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";
import { Button, buttonVariants } from "./ui/button";

interface NavProps {
  items?: {
    title: string;
    href: string;
    disabled?: boolean;
    external?: boolean;
  }[];
}

function ApplyButton() {
  return (
    <Link
      href="#apply"
      className={buttonVariants({ variant: "default" })}
    >
      Apply Now
    </Link>
  );
}

export function LandingPageHeader({ items }: NavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const segment = useSelectedLayoutSegment();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Rent Flow Capital</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-between md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium hidden md:block">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  item.disabled && "cursor-not-allowed opacity-80",
                  segment === item.href ? "text-foreground" : "text-foreground/60"
                )}
                {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <nav className="flex items-center">
              <ApplyButton />
            </nav>
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>
      </div>
      {showMobileMenu && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  item.disabled && "cursor-not-allowed opacity-80",
                  segment === item.href ? "text-foreground" : "text-foreground/60"
                )}
                onClick={() => setShowMobileMenu(false)}
                {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
