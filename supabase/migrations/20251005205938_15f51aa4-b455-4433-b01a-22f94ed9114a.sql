-- Fix critical RLS security issues

-- 1. Add missing UPDATE policy for user_roles table
-- This prevents unauthorized role modifications
CREATE POLICY "Only admins can update roles"
ON public.user_roles
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- 2. Improve waitlist_leads UPDATE policy for defense-in-depth
-- Note: The edge function uses Service Role Key which bypasses RLS,
-- but this policy provides additional security for direct database access
DROP POLICY IF EXISTS "Update only with valid confirm_token for confirmation" ON public.waitlist_leads;

-- Create a more restrictive policy that only allows service role updates
-- Since normal users shouldn't be able to update waitlist entries directly,
-- we make this policy very restrictive and rely on the edge function with Service Role Key
CREATE POLICY "Service role can update for confirmation"
ON public.waitlist_leads
FOR UPDATE
USING (
  -- Only allow updates through service role (edge function) or by admins
  has_role(auth.uid(), 'admin'::app_role)
)
WITH CHECK (
  -- Ensure updates only set valid confirmation states
  (status = 'confirmed'::waitlist_status AND consent_ts IS NOT NULL)
  OR has_role(auth.uid(), 'admin'::app_role)
);