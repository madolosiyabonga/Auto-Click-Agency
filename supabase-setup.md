# Supabase Setup Instructions

## 1. Environment Configuration
Ensure the following variables are set in your environment variables (in Vercel, or local `.env`):

```env
VITE_SUPABASE_URL=https://vhrmiyukjfmksjdtozgr.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZocm1peXVramZta3NqZHRvemdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNzkzNzMsImV4cCI6MjA5Njk1NTM3M30.0aiRnpdiYYPcUGgncI-IuWlnYp1xQHklwKNOCsVi5Go
```
*(If using Next.js in the future as originally mentioned, change `VITE_` to `NEXT_PUBLIC_`)*

## 2. Table Migration
Run the following SQL in the Supabase SQL Editor to create the `leads` table:

```sql
create table leads (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz default now()
);
```

## 3. Row Level Security (RLS) Policies
To ensure security, execute the following SQL to enable RLS and create policies. This allows anonymous website visitors to insert leads, but prevents anyone from reading, updating, or deleting them without administrative access.

```sql
-- Enable Row Level Security
alter table leads enable row level security;

-- Policy: Allow anonymous users to insert new leads
create policy "Allow anonymous inserts" 
on leads
for insert 
to anon
with check (true);

-- Note: By omitting SELECT, UPDATE, and DELETE policies for the 'anon' role, 
-- public users are automatically denied access to read or modify existing leads.
```

## 4. Installed Packages
The Supabase JavaScript SDK was installed via:
```bash
npm install @supabase/supabase-js
```

## 5. Implementation Files
The following files have been modified or created to support this integration:
- `/src/lib/supabase.ts` (Client initialization)
- `/src/pages/Contact.tsx` (Form integration, error handling, loading states)
