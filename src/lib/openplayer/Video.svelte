<script lang="ts">
  import type Player from 'openplayerjs'
  import OpenPlayerJs from 'openplayerjs'
  import { nanoid } from 'nanoid'
  import { onMount } from 'svelte'

  import { DEFAULT_CONFIG as defaultConfig } from '../constant'
  import Track from '../Track.svelte'

  export let tracks: TrackType[] = []

  export let bgImg: string = null
  export let src: string = null

  let container: HTMLMediaElement
  let player: Player

  let config = Object.assign(
    {},
    { ...defaultConfig },
    {
      showLoaderOnInit: false,
      pauseOthers: false,
    },
  )

  onMount(async () => {
    if (container) {
      try {
        player = new OpenPlayerJs(container)
        await player.init()
      } catch (err) {
        console.error(err)
      }
    }
  })
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video
  bind:this={container}
  id="op_{nanoid()}"
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
