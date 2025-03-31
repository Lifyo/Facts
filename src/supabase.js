import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kksxhjjbwxrpkzeshxfi.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtrc3hoampid3hycGt6ZXNoeGZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwODE3NDQsImV4cCI6MjA1ODY1Nzc0NH0.1Xlv_5zV3Juzgs9vOyKNDVuonMpnEeeAousF9kh6jlQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
