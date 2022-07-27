<script lang="ts">
  import PlyrVideo from './plyr/Video.svelte'
  import OpenPlayerVideo from './openplayer/Video.svelte'

  const types = {
    plyr: PlyrVideo,
    openplayer: OpenPlayerVideo,
  }

  export let type: 'plyr' | 'openplayer' = 'plyr'

  const { type: _, ...propNoType } = $$props
</script>

<svelte:component this={types[type]} {...propNoType} />
