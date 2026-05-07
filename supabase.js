const SUPABASE_URL = 'https://dzfrwjuugeqzsxrykgjc.supabase.co';
const SUPABASE_KEY = 'sb_publishable_JtHmPQMWIUXemI_5xTqYMQ_S8KxfzCM';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
