import { createClient } from "@supabase/supabase-js";
 
const SupaBaseURL = import.meta.env.VITE_SUPABASE_URL
const SupaBaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY


export const supabase = createClient(SupaBaseURL, SupaBaseAnonKey);
