# Supabase Audit Requests Setup Instructions

## 1. Table Migration
Run the following SQL in the Supabase SQL Editor to create the `audit_requests` table:

```sql
create table audit_requests (
    id bigint generated always as identity primary key,
    full_name text not null,
    business_name text not null,
    email text not null,
    phone text not null,
    help_request text,
    consultation_date date not null,
    consultation_time time not null,
    created_at timestamptz default now()
);
```

## 2. Row Level Security (RLS) Policies
To ensure security, execute the following SQL to enable RLS and create policies. This allows anonymous website visitors to insert requests, but prevents anyone from reading, updating, or deleting them without administrative access.

```sql
-- Enable Row Level Security
alter table audit_requests enable row level security;

-- Policy: Allow anonymous users to insert new audit requests
create policy "Allow anonymous inserts to audit_requests" 
on audit_requests
for insert 
to anon
with check (true);

-- Note: By omitting SELECT, UPDATE, and DELETE policies for the 'anon' role, 
-- public users are automatically denied access to read or modify existing requests.
```
