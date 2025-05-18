//import { createClient } from '@supabase/supabase-js';
//import 'dotenv/config';

//export const supabase = createClient(
 // process.env.SUPABASE_URL,
 // process.env.SUPABASE_KEY
//);

import 'dotenv/config';
console.log('SUPABASE_URL:', process.env.SUPABASE_URL);
console.log('SUPABASE_KEY:', process.env.SUPABASE_KEY);

import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
