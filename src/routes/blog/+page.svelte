<script>
  import Card from "$lib/components/Card.svelte";
  export let data;
  let {techBlog} = data;
</script>

<!-- <ul>
  {#each techBlog as post}
    <li>{post.title}</li>
    <li>{post.author}</li>
    <li>{post.tags}</li>
    <li>{post.content}</li>
    
  {/each}
</ul> -->

{#each techBlog as post}
  <Card {...post}/>
{/each}
