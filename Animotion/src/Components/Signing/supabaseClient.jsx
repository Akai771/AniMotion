import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://jtfjknkhrwsgjsvppyjx.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0ZmprbmtocndzZ2pzdnBweWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2ODYxMjgsImV4cCI6MjAxOTI2MjEyOH0.vrijqRGDoahuZRc9bK5Ivr4U5pmcfRuNMTt1_uKD7UY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);