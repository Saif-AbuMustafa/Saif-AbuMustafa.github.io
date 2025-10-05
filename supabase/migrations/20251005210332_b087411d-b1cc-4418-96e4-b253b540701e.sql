-- Fix: Make anonymous denial policies RESTRICTIVE instead of PERMISSIVE
-- RESTRICTIVE policies are AND'd together, preventing bypass by other policies

-- Drop the existing PERMISSIVE denial policies
DROP POLICY IF EXISTS "Deny anonymous access to waitlist data" ON public.waitlist_leads;
DROP POLICY IF EXISTS "Deny anonymous access to user roles" ON public.user_roles;

-- Recreate as RESTRICTIVE policies to ensure they cannot be overridden
CREATE POLICY "Deny anonymous access to waitlist data"
ON public.waitlist_leads
AS RESTRICTIVE
FOR SELECT
TO anon
USING (false);

CREATE POLICY "Deny anonymous access to user roles"
ON public.user_roles
AS RESTRICTIVE
FOR SELECT
TO anon
USING (false);

-- Explanation:
-- RESTRICTIVE policies are AND'd with all other policies
-- This ensures that even if other SELECT policies exist,
-- anonymous users will always be denied access to these tables