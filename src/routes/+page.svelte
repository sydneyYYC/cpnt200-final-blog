
<script>
  export let data;
</script>

<ul>
  {#each data.blog as post}
    <li>{post.title}</li>
  {/each}
</ul>