import React, { useState, useEffect } from "react";
import { SEO } from "../components/SEO";
import { Button } from "../components/ui/Button";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Contact() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const defaultService = searchParams.get('service') || '';
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  
  const todayDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (!selectedDate) {
      setAvailableSlots([]);
      setSelectedTime("");
      return;
    }
    
    // Parse the date as local time
    const d = new Date(`${selectedDate}T00:00:00`);
    const day = d.getDay(); // 0 is Sunday, 6 is Saturday
    
    if (day === 0) {
      setAvailableSlots([]);
      setSelectedTime("");
    } else {
      const slots = [];
      const startHour = day === 6 ? 9 : 8;
      const endHour = day === 6 ? 13 : 17;
      
      for (let h = startHour; h < endHour; h++) {
        slots.push(`${h.toString().padStart(2, '0')}:00`);
        slots.push(`${h.toString().padStart(2, '0')}:30`);
      }
      setAvailableSlots(slots);
      setSelectedTime("");
    }
  }, [selectedDate]);

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const name = formData.get('name') as string;

    if (!name || name.trim().length < 2) newErrors.name = "Full Name must be at least 2 characters.";
    if (!formData.get('businessName')) newErrors.businessName = "Business name is required.";
    
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^(?:\+27|0)[1-8][0-9]{8}$/.test(phone.replace(/\s+/g, ''))) {
      newErrors.phone = "Please enter a valid SA phone number.";
    }
    
    if (!selectedDate) {
      newErrors.consultation_date = "Please select a preferred date.";
    }
    if (!selectedTime) {
      newErrors.consultation_time = "Please select a preferred time.";
    }

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
      const full_name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;
      const business_name = formData.get('businessName') as string;
      const help_request = formData.get('message') as string;

      const { error } = await supabase
        .from('audit_requests')
        .insert([
          {
            full_name,
            business_name,
            email,
            phone,
            help_request: help_request || null,
            consultation_date: selectedDate,
            consultation_time: selectedTime,
          }
        ]);

      if (error) {
        throw new Error(error.message);
      }

      setStatus("success");
      
      // Redirect after a short delay so the user can see the success toast
      setTimeout(() => {
        navigate("/");
      }, 2000);
      
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

      <section className="relative pt-24 pb-20 bg-slate-950 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/30 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Schedule an Operational Audit</h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Fill out the form below. Our systems engineering team will review your submission and contact you to arrange an introductory strategy call.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 relative">
        {/* Success Toast */}
        {status === "success" && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <p className="font-medium">Thank you. Your audit request has been received.</p>
          </div>
        )}

        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white border border-slate-200 p-8 rounded-lg shadow-sm">
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p>We couldn't submit your request. Please try again.</p>
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
                  placeholder="e.g. 082 123 4567"
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition-colors ${errors.phone ? 'border-red-500' : 'border-slate-300'}`}
                  aria-invalid={errors.phone ? "true" : "false"}
                />
                {errors.phone && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14}/> {errors.phone}</p>}
              </div>

            </div>

            <hr className="border-slate-200 my-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="consultation_date" className="block text-sm font-medium text-slate-700">Preferred Date *</label>
                <input 
                  type="date" 
                  id="consultation_date" 
                  name="consultation_date"
                  min={todayDate}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition-colors bg-white ${errors.consultation_date ? 'border-red-500' : 'border-slate-300'}`}
                  aria-invalid={errors.consultation_date ? "true" : "false"}
                />
                {errors.consultation_date && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14}/> {errors.consultation_date}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="consultation_time" className="block text-sm font-medium text-slate-700">Preferred Time *</label>
                <select 
                  id="consultation_time" 
                  name="consultation_time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  disabled={!selectedDate || availableSlots.length === 0}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition-colors bg-white disabled:bg-slate-100 disabled:text-slate-400 ${errors.consultation_time ? 'border-red-500' : 'border-slate-300'}`}
                  aria-invalid={errors.consultation_time ? "true" : "false"}
                >
                  <option value="">
                    {(!selectedDate) ? "Select a date first" : (availableSlots.length === 0 ? "Unavailable on Sundays" : "Select a time...")}
                  </option>
                  {availableSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
                {errors.consultation_time && <p className="text-sm text-red-600 flex items-center gap-1"><AlertCircle size={14}/> {errors.consultation_time}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">How can we help you? (Optional)</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none transition-colors"
                placeholder="Tell us about the manual tasks slowing down your business..."
              ></textarea>
            </div>

            <Button 
              type="submit" 
              className="w-full md:w-auto"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</span>
              ) : "Submit Audit Request"}
            </Button>

            <p className="text-xs text-slate-500 mt-4">
              By submitting this form, you agree to our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>. Your data is encrypted and stored securely. We never sell your information.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
