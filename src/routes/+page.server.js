import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("tech_blog").select();
  return {
    techBlog: data ?? [],
  };
}