<script>
  export let title;
  export let author;
  export let tags;
  export let slug;
  export let category;
//   function slugify(str) {
//   return String(str)
//     .replace(/\s+/g, '-') // replace spaces with hyphens
//     .replace(/-+/g, '-') // remove consecutive hyphens
//     .trim() // trim leading or trailing whitespace
//     .normalize('NFKD') // split accented characters into their base characters and diacritical marks
//     .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
//     .toLowerCase() // convert to lowercase
//     .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
// }
</script>

<div>
  <a href="/blog/{slug}">
    <article class="bg-white w-[20rem] p-4 m-10 flex flex-col">
      <p class="bg-blue-900 max-w-min px-1 py-[1px] text-white mr-2 mb-2">{category}</p>
      <h2 class="text-2xl">{title}</h2>
      <p class="text-lg">{author}</p>
      <div class="flex mb-[4rem] flex-wrap">
        {#each tags as tag}
        <p class="bg-slate-200 max-w-min px-2 py-1 text-black mr-2 mb-2">{tag}</p>
        {/each}
      </div>
      <img src="./assets/heart.svg" alt="heart icon" class="w-[30px] h-auto justify-self-end">
    </article>
  </a>
</div>

<style>
  /* calling fonts here */
  h2 {
    font-family: 'Libre Baskervile' , serif;
  }

  p {
    font-family: 'Josefin Sans' , sans-serif;
  }

  article {
    box-shadow: -4px 7px 13px 2px #FACC15;
  }
</style>

