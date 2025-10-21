import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://xzukzdsdupmylcpynzrb.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dWt6ZHNkdXBteWxjcHluenJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNTg0NTgsImV4cCI6MjA3NjYzNDQ1OH0.F-rKJQvnFHYi98XM0McV2FOHHxCAtQms0IJtaMkZBwM'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
