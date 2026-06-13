import React, { useState } from "react";
import { SEO } from "../components/SEO";
import { Button } from "../components/ui/Button";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Contact() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultService = searchParams.get('service') || '';
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;

    if (!formData.get('name')) newErrors.name = "Name is required.";
    if (!formData.get('businessName')) newErrors.businessName = "Business name is required.";
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[\d\s-]{10,}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.get('message')) newErrors.message = "Please provide some details about your needs.";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first invalid field
      const firstInvalidField = Object.keys(newErrors)[0];
      const el = document.getElementById(firstInvalidField);
      if (el) el.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;
      const businessName = formData.get('businessName') as string;
      const service = formData.get('service') as string;
      const originalMessage = formData.get('message') as string;

      // Compile the full message since schema only accepts name, email, phone, message
      const fullMessage = `Business Name: ${businessName}\nService Area: ${service || 'Not specified'}\n\nMessage: ${originalMessage}`;

      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name,
            email,
            phone,
            message: fullMessage
          }
        ]);

      if (error) {
        throw new Error(error.message);
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us & Strategy Audit" 
        description="Book a free operational audit with AutoClick Agency. We'll identify bottlenecks and design custom automation solutions for your business."
      />

      <section className="pt-20 pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Schedule an Operational Audit</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Fill out the form below. Our systems engineering team will review your submission and contact you within 24 hours to arrange an introductory strategy call.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          
          {status === "success" ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center flex flex-col items-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Request Submitted Successfully</h2>
              <p className="text-slate-600">
                Thank you for contacting AutoClick Agency. We will get back to you shortly.
              </p>
              <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
                Submit another request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white border border-slate-200 p-8 rounded-lg shadow-sm">
              {status === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p>Something went wrong. Please try again later.</p>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14}/> {errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="businessName" className="block text-sm font-medium text-slate-700">Business Name *</label>
                  <input 
                    type="text" 
                    id="businessName" 
                    name="businessName" 
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition-colors ${errors.businessName ? 'border-red-500' : 'border-slate-300'}`}
                    aria-invalid={errors.businessName ? "true" : "false"}
                  />
                  {errors.businessName && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14}/> {errors.businessName}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Work Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14}/> {errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-slate-300'}`}
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                  {errors.phone && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14}/> {errors.phone}</p>}
                </div>

              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="block text-sm font-medium text-slate-700">Service Area (Optional)</label>
                <select 
                  id="service" 
                  name="service" 
                  defaultValue={defaultService}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white transition-colors"
                >
                  <option value="">Select a service focus...</option>
                  <option value="business-process-automation">Business Process Automation</option>
                  <option value="lead-generation-systems">Lead Generation Systems</option>
                  <option value="ai-implementation">AI Implementation</option>
                  <option value="digital-growth-infrastructure">Digital Growth Infrastructure</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">How can we help? *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition-colors ${errors.message ? 'border-red-500' : 'border-slate-300'}`}
                  aria-invalid={errors.message ? "true" : "false"}
                  placeholder="Tell us about the manual tasks slowing down your business..."
                ></textarea>
                {errors.message && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14}/> {errors.message}</p>}
              </div>

              <Button 
                type="submit" 
                className="w-full md:w-auto"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Submitting Request..." : "Submit Audit Request"}
              </Button>

              <p className="text-xs text-slate-500 mt-4">
                By submitting this form, you agree to our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>. Your data is encrypted and stored securely. We never sell your information.
              </p>
            </form>
          )}

        </div>
      </section>
    </>
  );
}
