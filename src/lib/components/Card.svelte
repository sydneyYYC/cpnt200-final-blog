<script>
  export let title;
  export let author;
  export let tags;
</script>

<div>
  <a href="/blog/{title}">
    <article>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{tags}</p>
    </article>
  </a>
</div>
