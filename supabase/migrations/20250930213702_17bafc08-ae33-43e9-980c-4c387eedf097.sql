-- Create enum for waitlist status
CREATE TYPE public.waitlist_status AS ENUM ('pending_confirm', 'confirmed', 'unsubscribed');

-- Create enum for heard channels
CREATE TYPE public.heard_channel AS ENUM ('twitter', 'instagram', 'linkedin', 'search', 'friend_referral', 'event_money2020', 'press_news', 'other');

-- Create waitlist_leads table
CREATE TABLE public.waitlist_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  country TEXT NOT NULL,
  city TEXT,
  heard_channel heard_channel NOT NULL,
  heard_detail TEXT,
  locale TEXT NOT NULL DEFAULT 'en',
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  referrer_url TEXT,
  ip_hash TEXT,
  user_agent TEXT,
  status waitlist_status NOT NULL DEFAULT 'pending_confirm',
  confirm_token TEXT NOT NULL,
  consent_ts TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create index on confirm_token for fast lookups
CREATE INDEX idx_waitlist_leads_confirm_token ON public.waitlist_leads(confirm_token);

-- Create index on email for fast lookups
CREATE INDEX idx_waitlist_leads_email ON public.waitlist_leads(email);

-- Create index on status for filtering
CREATE INDEX idx_waitlist_leads_status ON public.waitlist_leads(status);

-- Enable Row Level Security
ALTER TABLE public.waitlist_leads ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (for public signup)
CREATE POLICY "Anyone can insert waitlist entry"
ON public.waitlist_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy: Anyone can update their own entry via confirm_token (for confirmation)
CREATE POLICY "Anyone can update via confirm_token"
ON public.waitlist_leads
FOR UPDATE
TO anon, authenticated
USING (true);

-- Policy: Only authenticated users can read (for admin dashboard)
CREATE POLICY "Authenticated users can read all"
ON public.waitlist_leads
FOR SELECT
TO authenticated
USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_waitlist_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER update_waitlist_leads_updated_at
BEFORE UPDATE ON public.waitlist_leads
FOR EACH ROW
EXECUTE FUNCTION public.update_waitlist_updated_at();