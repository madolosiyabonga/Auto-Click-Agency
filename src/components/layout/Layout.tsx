import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
    </div>
  );
}
