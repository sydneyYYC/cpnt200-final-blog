<script>
  import Card from "$lib/components/Card.svelte";
  export let data;
  let {techBlog} = data;
  // console.log(techBlog);
</script>

<header class="bg-slate-900 flex justify-between p-2">
  <div class="static w-48 h-10 text-3xl text-white mx-2"> <a href="/">Tech Insights</a></div>
  <nav>
    <ul class="flex justify-around gap-4">
      <li class=" text-2xl text-white">
          <a class="m-2 hover:text-white" href="/blog">Blogs</a>
      </li>
    </ul>
  </nav>
</header>
<main class="bg-blue-950 flex flex-col min-h-screen">
  <h1 class="md:text-9xl mt-[4rem] mx-4 text-white text-8xl">The Blog</h1>
  <div class="flex space-around md:items-start mt-[2rem] flex-wrap self-center">
    {#each techBlog as post}
      <Card {...post}/>
    {/each}
  </div>
</main>

<style>
  /* import font */
    h1 {
    font-family: 'Libre Baskervile' , serif;
  }
</style>