import { createClient } from '@supabase/supabase-js'
import {SUPABSE_URL, ANON_KEY} from '$env/static/private'

export const supabase = createClient(SUPABSE_URL, ANON_KEY)