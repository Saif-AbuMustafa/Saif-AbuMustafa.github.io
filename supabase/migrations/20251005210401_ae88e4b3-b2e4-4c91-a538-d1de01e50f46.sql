-- Fix: Ensure PERMISSIVE policies work correctly with RESTRICTIVE denial policies

-- For user_roles: Recreate the PERMISSIVE policy for authenticated users
-- to work alongside the RESTRICTIVE anon denial
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;

CREATE POLICY "Users can view their own roles"
ON public.user_roles
AS PERMISSIVE
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Note: Now we have:
-- 1. RESTRICTIVE policy that denies anon users (blocks anonymous completely)
-- 2. PERMISSIVE policy that allows authenticated users to see their own roles
-- These work together: anon is blocked, authenticated users can see their own data