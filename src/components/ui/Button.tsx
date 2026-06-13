import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50 rounded-md";
    
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
      secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-sm",
      outline: "border border-slate-200 bg-white hover:bg-slate-50 hover:text-slate-900 text-slate-700",
      ghost: "hover:bg-slate-100 hover:text-slate-900 text-slate-700",
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-base",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      if (href.startsWith("http")) {
        return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{props.children as React.ReactNode}</a>;
      }
      return <Link to={href} className={classes}>{props.children as React.ReactNode}</Link>;
    }

    return (
      <button ref={ref} className={classes} {...props} />
    );
  }
);
Button.displayName = "Button";
