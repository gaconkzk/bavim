<script lang="ts">
  import Player from './lib/Player.svelte'
</script>

<main class="flex flex-col items-center">
  <Player
    type="plyr"
    preload="false"
    sources={['http://aio.us.to/file/MQLF4X5MEUS7']}
    bgImg="https://hips.hearstapps.com/hmg-prod/images/quotes-about-love2-1640022840.jpg"
    class="h-400px w-600px justify-center"
  />
</main>
