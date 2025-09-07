"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { ToggleTheme } from "./toggle-theme";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { NavLink } from "./nav-link";
import { useState } from "react";

export function Header() {
  const [openSheet, setOpenSheet] = useState(false)

  const handleOpenSheet = () => {
    setOpenSheet(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Rodrigo Sena
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <NavLink
            href="home"
            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            Início
          </NavLink>
          <NavLink
            href="about"
            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            Sobre
          </NavLink>
          <NavLink
            href="projects"
            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            Projetos
          </NavLink>
          <NavLink
            href="experience"
            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            Experiência
          </NavLink>
          <NavLink
            href="contact"
            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            Contato
          </NavLink>
        </nav>

        <div className="flex items-center space-x-4">
          <ToggleTheme />
          
          {/* Mobile Menu */}
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 hover:bg-accent rounded-md transition-colors">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu de Navegação</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6 mx-4">
                <SheetClose asChild>
                  <NavLink
                    onClick={handleOpenSheet}
                    href="about"
                    className="text-left text-sm font-medium hover:text-primary transition-colors cursor-pointer py-2"
                  >
                    Sobre
                  </NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink
                    onClick={handleOpenSheet}
                    href="projects"
                    className="text-left text-sm font-medium hover:text-primary transition-colors cursor-pointer py-2"
                  >
                    Projetos
                  </NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink
                    onClick={handleOpenSheet}
                    href="experience"
                    className="text-left text-sm font-medium hover:text-primary transition-colors cursor-pointer py-2"
                  >
                    Experiência
                  </NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink
                    onClick={handleOpenSheet}
                    href="contact"
                    className="text-left text-sm font-medium hover:text-primary transition-colors cursor-pointer py-2"
                  >
                    Contato
                  </NavLink>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
