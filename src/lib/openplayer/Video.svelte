<script lang="ts">
  import OpenPlayerJs from 'openplayerjs'
  import { onMount } from 'svelte'

  import { DEFAULT_CONFIG as defaultConfig } from '../constant'
  import Track from './Track.svelte'

  export let tracks: TrackType[] = []

  export let bgImg: string = null
  export let src: string = null

  let container: HTMLMediaElement
  let player

  let config = Object.assign(
    {},
    { ...defaultConfig },
    {
      showLoaderOnInit: false,
      pauseOthers: false,
    },
  )

  onMount(() => {
    if (container) {
      player = new OpenPlayerJs(container, {
        showLoaderOnInit: false,
        pauseOthers: false,
      })
      player.init()
    }
  })
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video
  bind:this={container}
  data-poster={bgImg}
  class="op-player__media"
  controls
  playsinline
>
  {#if src}
    <source {src} type="video/mp4" />
  {/if}
  {#each tracks as track}
    <Track {...track} />
  {/each}
</video>
