import { Link } from "react-router-dom";
export default function NotFound() { 
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">Page Not Found</h2>
      <p className="text-slate-600 max-w-md mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
        Return Home
      </Link>
    </div>
  ); 
}
