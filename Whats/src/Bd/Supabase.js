
  import { createClient } from "@supabase/supabase-js";
 
  const SupaBaseURL = "https://therxxqixnxbkhjqwpdz.supabase.co" //URL do SupaBase
  const SupaBaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoZXJ4eHFpeG54YmtoanF3cGR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMDExMDIsImV4cCI6MjA3Mzg3NzEwMn0.ek9K0WOPR5sSo6-EhE8IWmH3-WYgr5OYaEkZaIC0TsQ"//Chave Anonima do SupaBase

  export const supabase = createClient(SupaBaseURL, SupaBaseAnonKey);

  

  