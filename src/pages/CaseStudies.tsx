import { SEO } from "../components/SEO";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { TrendingDown, TrendingUp, Clock } from "lucide-react";

const DATA_1 = [
  { name: 'Month 1', hours: 140 },
  { name: 'Month 2', hours: 125 },
  { name: 'Month 3', hours: 80 },
  { name: 'Month 4', hours: 45 },
  { name: 'Month 5', hours: 20 },
];

export default function CaseStudies() {
  return (
    <>
      <SEO 
        title="Automation Case Studies & Success Stories" 
        description="Read how AutoClick Agency helped businesses reduce administrative workload, improve response times, and increase lead conversion rates."
      />

      <section className="relative pt-24 pb-20 bg-slate-950 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Client Success Stories</h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl bg-slate-950/50 inline-block">
              We measure our success entirely by the operational hours saved and the additional revenue generated for our clients. Review our recent implementations below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 space-y-24">
          
          {/* Case Study 1 */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-medium text-xs rounded-full">Professional Services</div>
              <h2 className="text-3xl font-bold text-slate-900">Eliminating 120+ Hours of Monthly Admin Bloat</h2>
              
              <div>
                <h3 className="font-bold text-slate-900 mb-2">The Challenge</h3>
                <p className="text-slate-600 text-sm leading-relaxed">A regional accounting firm was manually onboarding 40+ clients per month. Partners spent an average of 3 hours per client sending emails, requesting documents, and setting up portal access manually.</p>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-900 mb-2">The Solution</h3>
                <p className="text-slate-600 text-sm leading-relaxed">We implemented an automated onboarding sequence. When a contract is signed via digital signature, a webhook triggers the creation of client portal credentials, sends an introductory welcome sequence, and issues secure document upload links.</p>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-900 mb-2">The Outcome</h3>
                <p className="text-slate-600 text-sm leading-relaxed">The firm reduced onboarding time from 3 hours to 15 minutes per client, recovering 120 billable hours per month for senior partners.</p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 text-slate-500 mb-2 text-xs font-semibold uppercase"><Clock size={14}/> Time Saved</div>
                  <div className="text-2xl font-bold text-slate-900 flex items-center">-85%</div>
                </div>
                <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 text-slate-500 mb-2 text-xs font-semibold uppercase"><TrendingDown size={14}/> Manual Errors</div>
                  <div className="text-2xl font-bold text-slate-900 flex items-center">-100%</div>
                </div>
              </div>
              
              <div className="bg-white border border-slate-200 shadow-sm rounded-lg p-4">
                <h4 className="text-xs font-bold text-slate-900 text-center mb-4">Monthly Admin Hours Spent on Onboarding</h4>
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={DATA_1} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#475569" }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#475569" }} />
                      <Tooltip cursor={{ fill: '#F1F5F9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}/>
                      <Bar dataKey="hours" fill="#2563EB" radius={[4, 4, 0, 0]} barSize={30} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-200" />
          
          {/* Case Study 2 */}
          <div className="flex flex-col lg:flex-row gap-12 items-start lg:flex-row-reverse">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 font-medium text-xs rounded-full">Automotive Dealership</div>
              <h2 className="text-3xl font-bold text-slate-900">Increasing Lead Conversion Rates by 42%</h2>
              
              <div>
                <h3 className="font-bold text-slate-900 mb-2">The Challenge</h3>
                <p className="text-slate-600 text-sm leading-relaxed">A regional auto dealer was losing web leads to competitors because their sales team took an average of 4 hours to respond. Leads were sitting in a shared email inbox causing immense friction.</p>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-900 mb-2">The Solution</h3>
                <p className="text-slate-600 text-sm leading-relaxed">We replaced the static forms with conversational AI intake. Upon submission, leads are instantly parsed into the CRM, and an AI assistant initiates a personalized SMS conversation within 60 seconds to pre-qualify and suggest an appointment time.</p>
              </div>
              
              <div>
                <h3 className="font-bold text-slate-900 mb-2">The Outcome</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Response time dropped from 4 hours to &lt;1 minute. Lead-to-appointment conversion increased by 42% in the first 60 days of deployment.</p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 text-slate-500 mb-2 text-xs font-semibold uppercase"><Clock size={14}/> Response Time</div>
                  <div className="text-2xl font-bold text-slate-900">&lt;1 min</div>
                </div>
                <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 text-slate-500 mb-2 text-xs font-semibold uppercase"><TrendingUp size={14}/> Conversions</div>
                  <div className="text-2xl font-bold text-emerald-600">+42%</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
