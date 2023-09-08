import { createClient } from '@supabase/supabase-js';


//Superbase database
const supabaseUrl = 'https://otqnesdqlxzidtzllmff.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90cW5lc2RxbHh6aWR0emxsbWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwOTExMDMsImV4cCI6MjAwOTY2NzEwM30.C9XizhonSfMWt6Coc7tT-B4V_LeGtuMUGXFH074tm9c';

export const supabase = createClient(supabaseUrl, supabaseKey);