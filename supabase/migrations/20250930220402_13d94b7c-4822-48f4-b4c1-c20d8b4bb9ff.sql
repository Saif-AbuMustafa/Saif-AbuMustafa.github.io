-- Create index to speed up confirm lookup
CREATE INDEX IF NOT EXISTS idx_waitlist_confirm_token ON public.waitlist_leads(confirm_token);
