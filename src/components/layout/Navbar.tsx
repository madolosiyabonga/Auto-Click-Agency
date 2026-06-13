import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Building2, HelpCircle, Mail, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const NAV_ITEMS = [
  { label: "Home", path: "/", icon: Home, mobile: true },
  { label: "Services", path: "/services", icon: Briefcase, mobile: true },
  { label: "Industries", path: "/industries", icon: Building2, mobile: true },
  { label: "About", path: "/about", mobile: false },
  { label: "Case Studies", path: "/case-studies", mobile: false },
  { label: "FAQ", path: "/faq", icon: HelpCircle, mobile: true },
  { label: "Contact", path: "/contact", icon: Mail, mobile: true },
];

export function Navbar() {
  const location = useLocation();

  return (
    <>
      {/* Desktop Sticky Navbar */}
      <header className="hidden md:flex sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm items-center h-16 px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 mr-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded">
          <motion.div 
            initial={{ rotate: -10, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center"
          >
            <span className="text-blue-600">Auto</span>Click
          </motion.div>
        </Link>
        <nav className="flex-1 flex gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1 py-0.5",
                location.pathname === item.path ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
              )}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div 
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile Sticky Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 pb-safe shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-around h-16 px-2">
          {NAV_ITEMS.filter((item) => item.mobile).map((item) => {
            const Icon = item.icon!;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded",
                  isActive ? "text-blue-600" : "text-slate-500"
                )}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium leading-none">{item.label}</span>
                {isActive && (
                  <motion.div 
                    layoutId="mobile-navbar-indicator"
                    className="absolute top-0 w-8 h-1 bg-blue-600 rounded-b-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
