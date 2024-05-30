import { createClient } from "@supabase/supabase-js";

const supaBaseUrl = "https://mmawxoeqqzchugydftpq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tYXd4b2VxcXpjaHVneWRmdHBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwNzI0MjEsImV4cCI6MjAzMTY0ODQyMX0.XnykOw2Af-4KBKjnowumyzraechoT2YjeHokhjlacK8";

//const supabase = createClient("https://<project>.supabase.co", "<your-anon-key>");
const supabase = createClient(supaBaseUrl, supabaseKey);

export default supabase;