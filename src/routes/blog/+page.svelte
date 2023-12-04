<script>
  import Card from "$lib/components/Card.svelte";
  export let data;
  let {techBlog} = data;
  // console.log(techBlog);
</script>


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