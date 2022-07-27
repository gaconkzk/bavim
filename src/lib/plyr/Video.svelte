<script lang="ts">
  import Plyr from 'plyr'
  import { onMount } from 'svelte'
  import { nanoid } from 'nanoid'

  import { DEFAULT_CONFIG as defaultConfig } from '../constant'
  import Track from '../Track.svelte'

  export let tracks: TrackType[] = []

  export let bgImg: string = null
  export let src: string = null

  let container: HTMLMediaElement
  let player

  let config = Object.assign({}, { ...defaultConfig }, {})

  onMount(() => {
    if (container) {
      player = new Plyr(container, config)
    }
  })
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video
  bind:this={container}
  id="pl_{nanoid()}"
  data-poster={bgImg}
  {src}
  preload="auto"
>
  {#each tracks as track}
    <Track {...track} />
  {/each}
</video>
