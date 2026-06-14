import { SEO } from "../components/SEO";
import { Button } from "../components/ui/Button";
import { Settings2, Magnet, Bot, TrendingUp, CheckCircle } from "lucide-react";

export default function Services() {
  const SERVICES = [
    {
      id: "business-process-automation",
      title: "Business Process Automation",
      icon: Settings2,
      desc: "Eliminate manual data entry and repetitive tasks across your organization.",
      bullets: ["Workflow design & mapping", "Process optimization", "Task automation", "API connections between existing tools"],
    },
    {
      id: "lead-generation-systems",
      title: "Lead Generation Systems",
      icon: Magnet,
      desc: "Build automated engines that capture, qualify, and route leads reliably 24/7.",
      bullets: ["Website conversion optimization", "Automated marketing funnels", "CRM integrations & setups", "Automated follow-up sequences"],
    },
    {
      id: "ai-implementation",
      title: "AI Implementation",
      icon: Bot,
      desc: "Deploy practical AI solutions that act as round-the-clock team members.",
      bullets: ["Custom AI assistants", "Customer support automation", "Internal productivity tools", "Document processing systems"],
    },
    {
      id: "digital-growth-infrastructure",
      title: "Digital Growth Infrastructure",
      icon: TrendingUp,
      desc: "Establish a foundational digital presence optimized for organic discovery.",
      bullets: ["Google Business Profile optimization", "Automated content systems", "Review acquisition strategies", "Local SEO frameworks"],
    }
  ];

  return (
    <>
      <SEO 
        title="Automation Services & Digital Growth" 
        description="AutoClick Agency services include Business Process Automation, Lead Generation Systems, AI Implementation, and Digital Growth Infrastructure."
      />

      <section className="relative pt-24 pb-20 bg-slate-950 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Practical Automation Solutions</h1>
            <p className="text-lg text-slate-400 leading-relaxed bg-slate-950/50 inline-block">
              We design and implement bespoke operational frameworks. Our services focus exclusively on systems that reduce administrative bloat and directly generate revenue.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {SERVICES.map((srv) => (
              <div key={srv.id} className="border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
                <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  <srv.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{srv.title}</h3>
                <p className="text-slate-600 mb-8 flex-1">{srv.desc}</p>
                
                <div className="space-y-3 mb-8">
                  {srv.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-sm font-medium text-slate-700">{b}</span>
                    </div>
                  ))}
                </div>
                
                <div>
                  <Button variant="outline" href={`/contact?service=${srv.id}`} className="w-full">
                    Discuss this service
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-cyan-400/20 via-blue-600 to-blue-600"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Not sure which service you need?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Book a free operational audit. We'll review your current processes and identify the exact bottlenecks where automation will yield the highest ROI.
          </p>
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white border-0 shadow-lg" href="/contact">
            Request an Operational Audit
          </Button>
        </div>
      </section>
    </>
  );
}
