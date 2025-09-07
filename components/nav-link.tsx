"use client";

import { scrollToSection } from "@/healpers";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className = "", onClick, ...props }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    
    window.history.pushState(null, '', `#${href}`);
    
    scrollToSection(href);
    
    if (onClick) {
      onClick();
    }
    
  };

  return (
    <a
      href={`#${href}`}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
