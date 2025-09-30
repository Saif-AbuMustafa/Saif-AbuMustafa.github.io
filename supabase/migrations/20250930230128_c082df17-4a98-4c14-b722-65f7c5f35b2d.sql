-- Drop the overly permissive SELECT policy that exposes all waitlist data
-- to any authenticated user. This table contains sensitive PII (emails, IP addresses,
-- user agents, location data) and should only be accessible via service role.
DROP POLICY IF EXISTS "Authenticated users can read all" ON public.waitlist_leads;

-- If admin access is needed in the future, create a proper role-based system
-- using the patterns described in the security guidelines (user_roles table + 
-- security definer functions).