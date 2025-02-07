import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function FeatureGridItem(props: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
      <div className="flex h-[180px] flex-col rounded-md p-6 gap-4">
        {props.icon}
        <div className="space-y-2">
          <h3 className="font-bold">{props.title}</h3>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

interface FeatureGridProps {
  title: string;
  subtitle: string;
  items: {
    icon: ReactNode;
    title: string;
    description: string;
  }[];
  className?: string;
}

export function FeatureGrid({ title, subtitle, items, className }: FeatureGridProps) {
  return (
    <section className={cn("py-16 px-4 md:px-6", className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          {title}
        </h2>
        <p className="max-w-[85%] text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3">
        {items.map((item, index) => (
          <FeatureGridItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
