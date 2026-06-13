import { createClient } from '@supabase/supabase-js';

// Use Vite's import.meta.env instead of process.env, and fallback to the provided values
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vhrmiyukjfmksjdtozgr.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZocm1peXVramZta3NqZHRvemdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNzkzNzMsImV4cCI6MjA5Njk1NTM3M30.0aiRnpdiYYPcUGgncI-IuWlnYp1xQHklwKNOCsVi5Go';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
