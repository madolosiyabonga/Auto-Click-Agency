import { SEO } from "../components/SEO";
import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "What is business automation?",
    a: "Business automation involves using software to execute recurring tasks or processes without manual effort. It connects disconnected systems, triggers actions based on logic, and ensures data flows seamlessly across departments, reducing costly human errors and freeing up valuable employee time."
  },
  {
    q: "How can automation help small businesses?",
    a: "Automation helps small businesses punch above their weight by increasing capacity without expanding payroll. It accelerates lead response times, eliminates manual data entry, standardizes customer onboarding, and ensures consistent follow-ups, directly contributing to improved profit margins and scalability."
  },
  {
    q: "Is AI expensive for small businesses?",
    a: "No, AI is highly accessible today. Cloud-based microservices and API integrations allow small businesses to deploy powerful AI assistants and data processors for a fraction of the cost of hiring additional staff. ROI is typically realized within the first quarter."
  },
  {
    q: "What types of businesses benefit most?",
    a: "High-volume service businesses like healthcare clinics, auto dealerships, law firms, and real estate agencies benefit immensely. Any business dealing with repetitive scheduling, lead qualification, document collection, or standardized client communication will see immediate operational improvements from automation."
  },
  {
    q: "How long does implementation take?",
    a: "Implementation varies by complexity, but our core automation systems are typically deployed within 2 to 4 weeks. This includes workflow mapping, API integration, testing, and team training. We use phased rollouts to ensure zero disruption to your daily operations."
  },
  {
    q: "Can automation improve customer service?",
    a: "Absolutely. Automation ensures customers receive instant responses, consistent updates, and personalized follow-ups. By removing bottlenecks in communication and automatically routing complex issues to human agents, overall satisfaction and retention rates significantly improve."
  },
  {
    q: "What is workflow automation?",
    a: "Workflow automation is the design and execution of rule-based logic that triggers a sequence of tasks. For example, when a contract is signed, a workflow can automatically generate an invoice, create a client folder, and send a welcome email simultaneously."
  },
  {
    q: "Can automation generate leads?",
    a: "Yes, automated systems capture leads 24/7 through conversational agents, instantly qualify them using AI, and route them to your CRM. It prevents lead decay by initiating immediate contact, significantly increasing the probability of converting a prospect into a customer."
  },
  {
    q: "What systems integrate with existing business tools?",
    a: "Modern automation platforms like Zapier, Make, and custom API layers can integrate thousands of applications. We commonly connect CRMs (Salesforce, HubSpot), accounting software (QuickBooks, Xero), communication platforms (Slack, Teams), and specialized industry tools to create unified ecosystems."
  },
  {
    q: "How secure are automation solutions?",
    a: "Enterprise-grade automation solutions use high-level encryption (AES-256), OAuth 2.0 authentications, and comply with standards like SOC 2 and GDPR. We strictly adhere to NIST cybersecurity guidance to ensure your operational data remains secure and private during transit and at rest."
  },
  {
    q: "Do I need technical skills to manage these systems?",
    a: "No technical skills are required. We build intuitive, “set-and-forget” systems managed via simple dashboards. We handle the complex infrastructure, API maintenance, and error handling, providing your team with comprehensive training and ongoing support."
  },
  {
    q: "What happens if a workflow fails?",
    a: "Our infrastructure includes rigorous error handling and monitoring. If an API endpoint fails, the system automatically attempts retries. Persistent errors trigger immediate alerts to our support team, ensuring graceful recovery without exposing technical faults to your end users."
  },
  {
    q: "Is automation the same as outsourcing?",
    a: "No, outsourcing delegates tasks to external human workers, while automation executes tasks using software logic. Automation is faster, cheaper, and more accurate for repetitive digital tasks, though it perfectly complements outsourced teams handling complex, qualitative work."
  },
  {
    q: "Can AI write marketing content for my business?",
    a: "Yes, we implement AI content systems that understand your brand voice. These systems can auto-generate draft blog posts, social media updates, and email newsletters based on your parameters, requiring only a brief final review by your team."
  },
  {
    q: "Will automation replace my employees?",
    a: "Automation replaces tasks, not entire jobs. It eliminates the tedious, repetitive administrative duties, allowing your employees to focus on high-value activities like relationship building, strategic planning, and complex problem-solving that require human empathy and creativity."
  },
  {
    q: "How do you measure the ROI of automation?",
    a: "We calculate ROI by measuring the hours of human labor saved multiplied by hourly rates, combined with the increase in direct revenue generated through faster lead conversions and reduced operational errors. Dashboards track these KPIs in real-time."
  },
  {
    q: "What is an Answer Engine?",
    a: "An answer engine, like AI overviews or Perplexity, synthesizes direct answers from across the web rather than providing a list of links. We optimize your website content (AEO) to ensure these systems cite your business correctly and frequently."
  },
  {
    q: "How do you optimize for Generative AI search (GEO)?",
    a: "GEO involves structuring content with clear definitions, expert insights, and structured data markup. We prepare your digital presence so AI crawlers can easily parse, understand, and confidently recommend your services to users asking complex queries."
  },
  {
    q: "Can I automate my Google Reviews?",
    a: "Yes. We build compliant systems that trigger SMS or email review requests automatically after a successful transaction or appointment. This consistent, automated follow-up significantly increases positive feedback volume without requiring manual tracking."
  },
  {
    q: "How do we get started?",
    a: "Getting started begins with a free operational audit. We map out your current workflows, identify key bottlenecks, and propose a tailored automation roadmap outlining the timeline, costs, and projected ROI. Contact us to schedule your strategy session today."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Frequently Asked Questions" 
        description="Detailed answers regarding business automation, AI implementation, ROI, and how small businesses can benefit from workflow optimization."
        structuredData={faqSchema}
      />

      <section className="relative pt-24 pb-20 bg-slate-950 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-slate-400 leading-relaxed bg-slate-950/50 inline-block">
              Clear, expert insights on how business automation and AI systems are deployed securely and effectively in modern small businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-12">
            <h2 className="text-lg font-bold text-slate-900 mb-2">What You Need to Know</h2>
            <p className="text-sm text-slate-600 mb-4">Automation is not about replacing staff; it's about amplifying their capabilities. Below are direct, evidence-backed answers to the most common operational questions we receive.</p>
            <div className="text-xs text-slate-500 italic">
              Source: Insights derived from NIST cybersecurity frameworks, OECD digital transformation reports, and internal implementation data.
            </div>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-semibold text-slate-900 text-left pr-8">{faq.q}</h3>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-slate-400 shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  <div 
                    className={cn(
                      "px-6 overflow-hidden transition-all duration-200 ease-in-out",
                      isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
