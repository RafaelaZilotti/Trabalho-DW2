import './index.css'
  import { useState, useEffect } from 'react'
  import { createClient } from '@supabase/supabase-js'
  import { Auth } from '@supabase/auth-ui-react'
  import { ThemeSupa } from '@supabase/auth-ui-shared'

  const SupaBaseURL = "https://therxxqixnxbkhjqwpdz.supabase.co" //URL do SupaBase
  const SupaBaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoZXJ4eHFpeG54YmtoanF3cGR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgzMDExMDIsImV4cCI6MjA3Mzg3NzEwMn0.ek9K0WOPR5sSo6-EhE8IWmH3-WYgr5OYaEkZaIC0TsQ"//Chave Anonima do SupaBase

  const supabase = createClient(SupaBaseURL, SupaBaseAnonKey)

  export default supabase

  //export default function App() {
   // const [session, setSession] = useState(null)

    //useEffect(() => {
     // supabase.auth.getSession().then(({ data: { session } }) => {
      //  setSession(session)
     // })

    //  const {
      //  data: { subscription },
     // } = supabase.auth.onAuthStateChange((_event, session) => {
    //    setSession(session)
    //  })

     // return () => subscription.unsubscribe()
   // }, [])

 //   if (!session) {
     // return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
   // }
    //else {
    //  return (<div>Logged in!</div>)
   // }
 // }