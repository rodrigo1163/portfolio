"use client";

import { scrollToSection } from "@/healpers";
import { Button, type buttonVariants } from "./ui/button";
import type { VariantProps } from "class-variance-authority";

interface NavLinkButtonProps {
  props?: React.ComponentProps<"button">;
  href: string;
  children: React.ReactNode;
  variant?: VariantProps<typeof buttonVariants>['variant'];
  size?: VariantProps<typeof buttonVariants>['size'];
}

export function NavLinkButton({ href, children, variant = 'link', size = 'default', ...props }: NavLinkButtonProps) {
  return (
    <Button onClick={() => scrollToSection(href)} variant={variant} size={size} {...props}>
      {children}
    </Button>
  );
}