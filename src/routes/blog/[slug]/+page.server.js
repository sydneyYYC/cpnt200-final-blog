import { supabase } from "$lib/supabaseClient";

export async function load({params}) {
  console.log('params', params);
  let response =  await supabase
  .from("tech_blog")
  .select("*")
  .eq("slug", params.slug);
  console.log('response 0 from db', response.data[0]);
  return {
    title: response.data[0].title,
    content: response.data[0].content,
    author: response.data[0].author,
    tags: response.data[0].tags,
    category: response.data[0].category
  };
}