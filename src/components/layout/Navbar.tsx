import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Building2, HelpCircle, Mail, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import logoImage from "@/assets/images/autoclick_logo_1782068127488.jpg";

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

  const handleOpenSearch = () => {
    window.dispatchEvent(new CustomEvent('open-command-palette'));
  };

  return (
    <>
      {/* Desktop Sticky Navbar */}
      <header className="hidden md:flex sticky top-0 z-50 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-sm items-center h-16 px-6 lg:px-12">
        <Link to="/" className="flex items-center gap-3 font-bold text-xl tracking-tight text-white mr-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
          <motion.div 
            initial={{ rotate: -10, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center"
          >
            <img 
              src={logoImage} 
              alt="AutoClick Logo" 
              className="w-8 h-8 rounded-md object-cover border border-slate-800"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <span><span className="text-blue-500">Auto</span>Click</span>
        </Link>
        <nav className="flex-1 flex gap-6 items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-0.5",
                location.pathname === item.path ? "text-white" : "text-slate-400 hover:text-white"
              )}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div 
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center ml-4">
          <button
            onClick={handleOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-400 bg-slate-900 border border-slate-700 hover:border-slate-600 hover:text-white rounded-md transition-colors"
          >
            <Search className="w-4 h-4" />
            <span className="hidden lg:inline-block">Search...</span>
            <kbd className="hidden lg:inline-block ml-2 text-[10px] font-sans font-semibold px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-400">
              ⌘K
            </kbd>
          </button>
        </div>
      </header>

      {/* Mobile Sticky Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950 border-t border-slate-800 pb-safe shadow-[0_-2px_10px_rgba(0,0,0,0.2)]">
        <div className="flex items-center justify-around h-16 px-1">
          {NAV_ITEMS.filter((item) => item.mobile).map((item) => {
            const Icon = item.icon!;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded",
                  isActive ? "text-blue-400" : "text-slate-500"
                )}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium leading-none">{item.label}</span>
                {isActive && (
                  <motion.div 
                    layoutId="mobile-navbar-indicator"
                    className="absolute top-0 w-8 h-1 bg-blue-500 rounded-b-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
          <button
            onClick={handleOpenSearch}
            className="relative flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded text-slate-500"
          >
            <Search size={20} strokeWidth={2} />
            <span className="text-[10px] font-medium leading-none">Search</span>
          </button>
        </div>
      </nav>
    </>
  );
}
