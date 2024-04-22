import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://qbffvaevpspxpiirydsy.supabase.co";
const ANON_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZmZ2YWV2cHNweHBpaXJ5ZHN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3OTk3ODAsImV4cCI6MjAyOTM3NTc4MH0.7RDyBE9gZxuiiElkR0BN_hYpM4nlNrWskcSFC5bW-SI";

const supabase = createClient(PROJECT_URL, ANON_KEY);
export default supabase;
