<script>
  export let data;
  console.log(data);
</script>

<!-- header -->
<main class="bg-blue-950 text-white min-h-screen flex">
    <section>
    <img src="/img/blog-bg.jpg" alt="code on computer" class="w-screen h-[200px] object-cover">
    <div class="ml-[10rem] p-8 max-w-[70%]">
      <h1 class="text-5xl mb-4">{data.title}</h1>
      <p class="text-lg border-[1px] border-blue-200 max-w-min px-2 py-1">{data.category}</p>
      <p class="text-xl my-2">Author: {data.author}</p>
      <div class="flex">
        {#each data.tags as tag}
        <p class="border-slate-400 border-[1px] max-w-min px-2 py-1 text-white mr-2 my-2">{tag}</p>
        {/each}
      </div>
      <p class="text-xl leading-loose mt-4">{data.content}</p>
    </div>
  </section>
</main>

<!-- footer -->
<style>
    h1 {
    font-family: 'Libre Baskervile' , serif;
  }

  p {
    font-family: 'Josefin Sans' , sans-serif;
  }

</style>