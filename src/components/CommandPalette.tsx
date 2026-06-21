import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Search, FileText, Briefcase, Building2, HelpCircle, Phone, X, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

const PAGES = [
  { id: "home", label: "Home", path: "/", icon: LayoutDashboard, category: "Pages" },
  { id: "services", label: "Services", path: "/services", icon: Briefcase, category: "Pages" },
  { id: "industries", label: "Industries", path: "/industries", icon: Building2, category: "Pages" },
  { id: "about", label: "About Us", path: "/about", icon: FileText, category: "Pages" },
  { id: "case-studies", label: "Case Studies", path: "/case-studies", icon: FileText, category: "Pages" },
  { id: "faq", label: "FAQ", path: "/faq", icon: HelpCircle, category: "Pages" },
  { id: "contact", label: "Contact", path: "/contact", icon: Phone, category: "Pages" },
];

const SERVICES = [
  { id: "srv-bpa", label: "Business Process Automation", path: "/services#bpa", icon: Briefcase, category: "Services" },
  { id: "srv-lgs", label: "Lead Generation Systems", path: "/services#lead-gen", icon: Briefcase, category: "Services" },
  { id: "srv-aii", label: "AI Implementation", path: "/services#ai", icon: Briefcase, category: "Services" },
  { id: "srv-dgi", label: "Digital Growth Infrastructure", path: "/services#dgi", icon: Briefcase, category: "Services" },
];

const ALL_ITEMS = [...PAGES, ...SERVICES];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    const handleOpenPalette = () => setOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleOpenPalette);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleOpenPalette);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const filteredItems = ALL_ITEMS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) || 
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleNavigate = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleNavigate(filteredItems[selectedIndex].path);
      }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] bg-slate-950/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[101] flex items-start justify-center pt-[20vh] px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden shadow-blue-900/20 pointer-events-auto flex flex-col"
            >
              <div className="relative flex items-center px-4 py-3 border-b border-slate-800">
                <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search pages, services, or commands..."
                  className="w-full bg-transparent border-none text-white focus:outline-none focus:ring-0 placeholder:text-slate-500 text-lg"
                />
                <button 
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredItems.length === 0 ? (
                  <div className="py-14 text-center text-slate-400">
                    <p>No results found for "{query}"</p>
                  </div>
                ) : (
                  <div className="space-y-1">
                    {filteredItems.map((item, index) => {
                      const Icon = item.icon;
                      const isSelected = index === selectedIndex;
                      return (
                        <button
                          key={item.id}
                          className={cn(
                            "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors",
                            isSelected 
                              ? "bg-blue-600/10 text-blue-400" 
                              : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                          )}
                          onClick={() => handleNavigate(item.path)}
                          onMouseEnter={() => setSelectedIndex(index)}
                        >
                          <div className={cn(
                            "p-2 rounded-md",
                            isSelected ? "bg-blue-600/20" : "bg-slate-800 text-slate-400"
                          )}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{item.label}</div>
                            <div className={cn(
                              "text-xs mt-0.5",
                              isSelected ? "text-blue-400/70" : "text-slate-500"
                            )}>
                              {item.category}
                            </div>
                          </div>
                          {isSelected && (
                            <span className="text-xs font-medium text-blue-500 pr-2">Enter ↵</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="px-4 py-3 bg-slate-950/50 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
                <div>
                  <span className="font-semibold text-slate-300 px-1 py-0.5 rounded border border-slate-700 bg-slate-800">↑</span>{' '}
                  <span className="font-semibold text-slate-300 px-1 py-0.5 rounded border border-slate-700 bg-slate-800">↓</span>{' '}
                  to navigate
                </div>
                <div>
                  <span className="font-semibold text-slate-300 px-1 py-0.5 rounded border border-slate-700 bg-slate-800">esc</span>{' '}
                  to close
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
