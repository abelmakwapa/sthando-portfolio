import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-electric/40 bg-electric/10 text-electric-bright",
        amber: "border-amber/40 bg-amber/10 text-amber-bright",
        outline: "border-border-strong bg-transparent text-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
