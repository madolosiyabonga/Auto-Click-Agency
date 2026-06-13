import { SEO } from "../components/SEO";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { 
  BarChart3, Settings2, Users, CalendarDays, Mail, CheckCircle, 
  ArrowRight, ShieldCheck, Zap, Briefcase, Building2, TrendingUp, MonitorPlay
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

// --- Mock Data ---
const REVIEWS = [
  { name: "Michael R.", ind: "Automotive", rating: 5, text: "AutoClick completely transformed how we handle incoming leads. Our response time dropped from hours to minutes." },
  { name: "Sarah J.", ind: "Healthcare", rating: 5, text: "The patient follow-up automation system they built saving our front desk 15 hours a week." },
  { name: "David L.", ind: "Real Estate", rating: 5, text: "Lead generation through their CRM integration directly increased our closed deals by 20% this quarter." },
  { name: "Emma T.", ind: "Professional Services", rating: 5, text: "A highly professional agency. The onboarding was smooth, and the ROI on the automated workflows was immediate." },
  { name: "James H.", ind: "Hospitality", rating: 5, text: "Managing reservations and guest communications used to be a nightmare. Now it runs on autopilot." },
  { name: "Linda K.", ind: "Education", rating: 5, text: "Student enrollment inquiries are automatically categorized and routed. Brilliant implementation." }
];

export default function Home() {
  return (
    <>
      <SEO 
        title="Automate Operations & Grow Smarter" 
        description="AutoClick Agency helps small businesses eliminate bottlenecks using practical automation systems that improve efficiency, generate more leads, and unlock sustainable growth."
      />

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Left Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 text-balance">
                Automate Operations. <br/>
                <span className="text-blue-600">Increase Revenue.</span> <br/>
                Grow Smarter.
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                AutoClick Agency helps small businesses eliminate bottlenecks using practical automation systems that improve efficiency, generate more leads, and unlock sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" href="/contact">Contact Us</Button>
                <Button size="lg" variant="outline" href="/services">Explore Services</Button>
              </div>
            </motion.div>

            {/* Right Dashboard Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-2xl transform rotate-2 scale-105 opacity-50 z-0"></div>
              
              <div className="relative z-10 bg-white border border-slate-200 shadow-xl rounded-xl overflow-hidden flex flex-col">
                {/* Mockup Header */}
                <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="text-xs font-medium text-slate-500 bg-white px-3 py-1 border border-slate-200 rounded-md">
                    autoclick-os.app
                  </div>
                  <div></div>
                </div>
                
                {/* Mockup Body */}
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50">
                  {/* Lead Pipeline */}
                  <motion.div 
                    initial={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm col-span-1 md:col-span-2 cursor-pointer"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2"><Settings2 size={16} className="text-blue-600"/> Revenue Analytics</h3>
                      <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-medium">+24% MRR</span>
                    </div>
                    <div className="h-24 flex items-end gap-2">
                      {[30, 45, 25, 60, 75, 40, 90, 100].map((h, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                          className="flex-1 bg-blue-100 hover:bg-blue-600 transition-colors rounded-t-sm"
                        ></motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Tasks */}
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm space-y-3 cursor-pointer"
                  >
                    <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2"><Users size={16} className="text-blue-600"/> Lead Pipeline</h3>
                    <div className="space-y-2">
                      {[
                        { label: "New Leads Captured", val: "142", status: "emerald" },
                        { label: "Follow-ups Sent", val: "89", status: "blue" },
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center text-xs">
                          <span className="text-slate-600">{item.label}</span>
                          <span className={cn("font-medium", `text-${item.status}-600`)}>{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Appointments */}
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm space-y-3 cursor-pointer"
                  >
                    <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2"><CalendarDays size={16} className="text-blue-600"/> Appointments</h3>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 flex items-center justify-center bg-cyan-100 text-cyan-600 rounded-full font-bold text-sm">32</div>
                      <div className="text-xs text-slate-600">Auto-scheduled <br/> this week.</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Why Businesses Choose AutoClick</h2>
            <p className="text-slate-600 mt-2 max-w-2xl">We bridge the gap between complex software and practical business needs with government-style transparency and enterprise reliability.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Settings2, title: "Practical Automation", desc: "No complex fluff. Just tangible systems that handle repetitive tasks efficiently." },
              { icon: Users, title: "Human-Centered", desc: "Implementation focused on team adoption and real-world operational workflows." },
              { icon: TrendingUp, title: "Revenue-Focused", desc: "Every solution we build is directly mapped to reducing costs or driving sales." },
              { icon: ShieldCheck, title: "Scalable Systems", desc: "Enterprise-grade architecture that securely scales as your business grows." }
            ].map((feature, i) => (
              <div key={i} className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
                <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                {/* Simplified Google 'G' Icon */}
                <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Client Testimonials
              </h2>
              <p className="text-slate-500 mt-2 text-sm max-w-xl">
                These testimonials are illustrative examples pending publication of verified customer reviews.
              </p>
            </div>
            <div className="flex items-center gap-1 text-amber-400 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
              {[1,2,3,4,5].map(v => <svg key={v} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              <span className="text-amber-700 font-bold ml-1 text-sm">5.0</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                </div>
                <p className="text-slate-700 text-sm mb-6 flex-1 italic">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">{review.name.charAt(0)}</div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{review.name}</div>
                    <div className="text-xs text-slate-500">{review.ind}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Optimize Your Systems?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Stop losing time to manual tasks. Let's design an automation infrastructure that practically runs itself.
          </p>
          <Button size="lg" href="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white border-0">
            Schedule a Strategy Call
          </Button>
        </div>
      </section>
    </>
  );
}
