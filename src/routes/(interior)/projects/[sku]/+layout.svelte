<script>
  const { children, data } = $props();
</script>

<svelt:head>
  <title>{data.project.title} | Cosmic Flowchart</title>
</svelt:head>

<div>
  <h1 class="text-6xl text-center my-4">{data.project.title}</h1>
  <p class="text-xl text-center my-4">{data.project.description}</p>
  {@render children()}
</div>
