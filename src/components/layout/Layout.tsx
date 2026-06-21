import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CommandPalette } from "../CommandPalette";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 w-full relative pb-16 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <CommandPalette />
    </div>
  );
}
