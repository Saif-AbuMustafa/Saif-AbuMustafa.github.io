-- Fix critical security issue: Prevent anonymous access to sensitive customer data

-- 1. Deny anonymous users from viewing waitlist leads (emails, IPs, etc.)
-- This prevents scrapers from stealing customer data
CREATE POLICY "Deny anonymous access to waitlist data"
ON public.waitlist_leads
FOR SELECT
TO anon
USING (false);

-- 2. Deny anonymous users from viewing user roles
-- This prevents attackers from discovering admin accounts
CREATE POLICY "Deny anonymous access to user roles"
ON public.user_roles
FOR SELECT
TO anon
USING (false);

-- Note: These policies ensure that:
-- - Only admins (authenticated with admin role) can view this sensitive data
-- - Edge functions using Service Role Key can still access the data
-- - Anonymous users are explicitly blocked from reading any records