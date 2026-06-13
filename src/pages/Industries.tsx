import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { 
  Car, HeartPulse, Scale, Store, GraduationCap, Utensils, Home, ArrowRight 
} from "lucide-react";

export default function Industries() {
  const INDUSTRIES = [
    {
      id: "automotive",
      title: "Automotive",
      icon: Car,
      desc: "Streamline appointment scheduling, inventory updates, and customer follow-ups."
    },
    {
      id: "healthcare",
      title: "Healthcare",
      icon: HeartPulse,
      desc: "HIPAA-compliant workflows for patient intake, appointment reminders, and billing."
    },
    {
      id: "professional-services",
      title: "Professional Services",
      icon: Scale,
      desc: "Automate client onboarding, document collection, and recurring invoicing."
    },
    {
      id: "local-retail",
      title: "Local Retail",
      icon: Store,
      desc: "Connect POS systems with marketing CRM to drive repeat purchases."
    },
    {
      id: "education",
      title: "Education",
      icon: GraduationCap,
      desc: "Manage enrollment pipelines, facility scheduling, and student communications."
    },
    {
      id: "hospitality",
      title: "Hospitality",
      icon: Utensils,
      desc: "Automate reservation confirmations, guest feedback, and staff scheduling."
    },
    {
      id: "real-estate",
      title: "Real Estate",
      icon: Home,
      desc: "Lead routing, property updates, and automated follow-up sequences for buyers."
    }
  ];

  return (
    <>
      <SEO 
        title="Industries We Serve" 
        description="AutoClick Agency builds automation solutions tailored for Automotive, Healthcare, Professional Services, Retail, Education, Hospitality, and Real Estate."
      />

      <section className="pt-20 pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Industries We Serve</h1>
            <p className="text-lg text-slate-600 leading-relaxed bg-white/50 inline-block">
              We understand that every sector has unique operational bottlenecks. Our systems are custom-tailored to the specific compliance, customer expectations, and technical environments of your industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <div key={ind.id} className="group border border-slate-200 rounded-lg p-6 bg-white hover:border-blue-600 hover:shadow-md transition-all flex flex-col">
                <ind.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{ind.title}</h3>
                <p className="text-sm text-slate-600 mb-6 flex-1">{ind.desc}</p>
                
                <Link to={`/contact?industry=${ind.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                  Discuss your industry <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
