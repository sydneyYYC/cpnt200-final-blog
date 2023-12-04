<script>
  export let data;
  console.log(data);
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

<main class="bg-blue-950 text-white min-h-screen flex max-w-max">
    <section>
    <img src="/img/blog-bg.jpg" alt="code on computer" class="w-screen h-[200px] object-cover">
    <div class="md:ml-[10rem] p-8 max-w-[70%] ml-4">
      <h1 class="md:text-5xl mb-4 text-4xl">{data.title}</h1>
      <p class="text-lg border-[1px] border-blue-200 max-w-min px-2 py-1">{data.category}</p>
      <p class="text-xl my-2">Author: {data.author}</p>
      <div class="flex">
        {#each data.tags as tag}
        <p class="border-slate-400 border-[1px] max-w-min px-2 py-1 text-white mr-2 my-2">{tag}</p>
        {/each}
      </div>
      <p class="text-xl leading-loose mt-4 md:max-w-[70ch]">{@html data.content}</p>
    </div>
  </section>
</main>

<style>
    h1 {
    font-family: 'Libre Baskervile' , serif;
  }

  p {
    font-family: 'Josefin Sans' , sans-serif;
  }

</style>