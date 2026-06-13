import { SEO } from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about AutoClick Agency, our mission to automate small businesses, and our commitment to enterprise-grade reliability."
      />

      <section className="pt-20 pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">About AutoClick</h1>
            <p className="text-lg text-slate-600 leading-relaxed bg-white/50 inline-block">
              We started with a simple observation: Small businesses are drowning in administrative work that enterprise companies automated a decade ago.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 space-y-12 text-slate-700 leading-relaxed">
          
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="mb-4">
              Our mission is to democratize operational efficiency. We believe that a 5-person team equipped with the right automation infrastructure can operate with the same capacity and professionalism as a 50-person organization.
            </p>
            <p>
              We bridge the gap between complex software APIs and practical, day-to-day business operations. We don't just sell software; we design and implement custom operational framework that reduce cost and increase revenue.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The "Government-Grade" Promise</h2>
            <p className="mb-4">
              We model our implementation and interface design on modern government digital service portals. Why? Because government digital services prioritize clarity, accessibility, and absolute reliability over flashy trends.
            </p>
            <p>
              When you work with AutoClick Agency, you won't find convoluted dashboards or hidden metrics. You will find clear documentation, robust error handling, secure data transit, and systems that simply work.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 rounded-lg">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                <div>
                  <strong className="text-slate-900 block">Practicality over Hype</strong>
                  <span className="text-sm">We only implement technology—including AI—if it solves a specific, measurable business problem.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                <div>
                  <strong className="text-slate-900 block">Transparent Operations</strong>
                  <span className="text-sm">No black-box algorithms. We document your workflows so your team understands exactly how their systems operate.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                <div>
                  <strong className="text-slate-900 block">Security as Standard</strong>
                  <span className="text-sm">Customer data is a liability if mishandled. We build with enterprise-grade encryption and strict access controls by default.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
