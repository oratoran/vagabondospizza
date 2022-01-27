<script context="module">
  
  const modules = import.meta.glob('../../static/images/restoran/*.jpg');

  let allImages = [];

  for (let path in modules) {
    let cleanPath = path.replace("../../static", "");
    allImages.push({imgUrl: cleanPath});
  }

  export const load = async () => {
    const images = await Promise.all(allImages)

    return {
      props: {
        images,
      },
    };
  };
</script>

<script>
  export let images

  import baguetteBox from 'baguettebox.js'

  import { onMount } from 'svelte';

  onMount(async () => {
    
    baguetteBox.run('.gallery');

  });

</script>

<svelte:head>
    <title>Yeniköy Pizza Restoranımız</title>
</svelte:head>

<div class="md:w-4/5 mx-auto pt-10 font-semibold text-center">
  <h1 class="text-green-600 text-2xl">Vagabondo's Restaurant'ı Keşfedin</h1>
  <p>Vagabondo’s Restaurant 1989 yılından bu yana aralıksız olarak hizmet vermektedir.</p>
</div>

<div class=" w-10/12 mx-auto py-10">
  <div class="gallery masonry">
    {#await images}
	<!-- promise is pending -->
	<p>waiting for the promise to resolve...</p>
{:then images}
	<!-- promise was fulfilled -->
	{#each images as item }
      <a href=".{item.imgUrl}" data-caption="Vagabondos Pizza Yeniköy">
            <img src="{item.imgUrl}" alt="Vagabondos Pizza Yeniköy" />
        </a>
    {/each}
{/await}

    
  </div>
</div>

<style>

  @import 'baguettebox.js/dist/baguetteBox.min.css';

  .masonry {
  columns: 4;
  column-gap: 16px;
}
@media (max-width: 1200px) {
  .masonry {
    columns: 3;
  }
}
@media (max-width: 992px) {
  .masonry {
    columns: 2;
  }
}
.masonry a {
  display: inline-block;
  margin-bottom: 16px;
  position: relative;
  cursor: pointer;
}
.masonry a:before {
  border-radius: 5px;
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
}
.masonry a img {
  width: 100%;
  border-radius: 5px;
}

   
</style>
