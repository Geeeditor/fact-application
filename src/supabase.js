import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sctjyqyiinxnegnomvgk.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjdGp5cXlpaW54bmVnbm9tdmdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkxODUyMDUsImV4cCI6MTk5NDc2MTIwNX0.05v-1--48KlCs4AYHZHRn6GjjOwOl0hzbTlfxJ_Zctk`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
