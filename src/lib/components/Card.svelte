<script>
  export let title;
  export let author;
  export let tags;

  function slugify(str) {
  return String(str)
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-') // remove consecutive hyphens
    .trim() // trim leading or trailing whitespace
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
}
</script>

<div>
  <a href="/blog/{slugify(title)}">
    <article>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{tags}</p>
    </article>
  </a>
</div>
