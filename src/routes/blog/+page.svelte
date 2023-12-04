<script>
  import Card from "$lib/components/Card.svelte";
  export let data;
  let {techBlog} = data;
  // console.log(techBlog);
</script>

<!-- header goes here -->
<main class="bg-blue-950 flex flex-col min-h-screen">
  <h1 class="text-9xl mt-[4rem] mx-4 text-white">The Blog</h1>
  <div class="flex space-around items-start mt-[2rem]">
    {#each techBlog as post}
      <Card {...post}/>
    {/each}
  </div>
</main>
<!-- footer goes here -->

<style>
  /* import font */
    h1 {
    font-family: 'Libre Baskervile' , serif;
  }
</style>