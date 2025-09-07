"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { scrollToSection } from "@/healpers";

export function ScrollToTopButton() { 
  return (
    <Button variant="outline" size="icon" className="rounded-full fixed bottom-4 right-4 z-50" onClick={() => scrollToSection("home")}>
      <ArrowUp className="h-4 w-4" />
    </Button>
  )
}