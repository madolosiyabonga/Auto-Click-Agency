import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
              <span className="text-blue-500">Auto</span>Click Agency
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              Helping small businesses grow and operate more efficiently by identifying operational bottlenecks and implementing practical automation solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/faq" className="hover:text-blue-400">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} AutoClick Agency. All rights reserved.</div>
          <div className="font-medium">Powered by AutoClick</div>
        </div>
      </div>
    </footer>
  );
}
