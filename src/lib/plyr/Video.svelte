<script lang="ts">
  import Plyr from 'plyr'
  import { onMount } from 'svelte'

  import { DEFAULT_CONFIG as defaultConfig } from '../constant'
  import Track from './Track.svelte'

  export let tracks: TrackType[] = []

  export let bgImg: string = null
  export let src: string =
    'http://download008.fshare.vn/dl/98nRyc3ql4Y2Vw3lOoEgz8UTfDRrRZp00s0141vyA1xSPEli-ey-ZwQ5C8plb9RUzmwt6Lo5qjryli1K/Lightyear.2022.ViE-DUB.1080p.WEB-DL.DDP5.1.Atmos.x264-NOGRP-Longtieng-Vietsub.mkv'

  let container: HTMLElement
  let player

  let config = Object.assign({}, { ...defaultConfig }, {})

  onMount(() => {
    if (container) {
      player = new Plyr(container, config)
    }
  })
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video bind:this={container} data-poster={bgImg} {src} preload="auto">
  {#each tracks as track}
    <Track {...track} />
  {/each}
</video>
