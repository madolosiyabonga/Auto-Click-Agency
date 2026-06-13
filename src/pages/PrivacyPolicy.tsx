import { SEO } from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy" 
        description="Privacy Policy for AutoClick Agency."
      />

      <section className="pt-20 pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Privacy Policy</h1>
            <p className="text-lg text-slate-600 bg-white/50 inline-block">
              Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 space-y-8 text-slate-700 leading-relaxed text-sm">
          
          <p>
            AutoClick Agency ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (the "Site") and utilize our automation consulting services.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-12 mb-4">1. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, business name, and email address, and telephone number that you voluntarily give to us when choosing to participate in various activities related to the Site, such as booking an operational audit.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-12 mb-4">2. Use of Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Respond to your operational audit requests.</li>
            <li>Deliver targeted automation consulting services to your business.</li>
            <li>Improve the functionality and performance of our website.</li>
            <li>Compile anonymous statistical data and analysis for use internally.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-12 mb-4">3. Disclosure of Your Information</h2>
          <p>We do not sell your personal information. We may share information we have collected about you in certain situations including:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, and customer service.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-12 mb-4">4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-12 mb-4">5. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:<br/>
            <strong>Email:</strong> privacy@autoclickagency.example.com<br/>
            <strong>Address:</strong> 123 Automation Way, Tech District, 90210
          </p>

        </div>
      </section>
    </>
  );
}
