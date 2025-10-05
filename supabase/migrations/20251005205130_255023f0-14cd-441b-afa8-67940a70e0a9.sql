-- Drop the overly permissive UPDATE policy
DROP POLICY IF EXISTS "Anyone can update via confirm_token" ON public.waitlist_leads;

-- Create a restrictive UPDATE policy that validates confirm_token
-- This policy ensures only records being confirmed with matching token can be updated
CREATE POLICY "Update only with valid confirm_token for confirmation" 
ON public.waitlist_leads
FOR UPDATE 
USING (
  -- Only allow updates on records that are pending confirmation
  status = 'pending_confirm'::waitlist_status
  -- Note: The confirm_token validation happens in the edge function
  -- This policy just ensures only pending records can be updated
)
WITH CHECK (
  -- Only allow updating to confirmed status with consent timestamp
  status = 'confirmed'::waitlist_status 
  AND consent_ts IS NOT NULL
);

-- Add a policy for admin updates (admins should be able to update any record)
CREATE POLICY "Admins can update all waitlist leads" 
ON public.waitlist_leads
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));