<script lang="ts">
  import Plyr from 'plyr'
  import { onDestroy, onMount } from 'svelte'
  import { nanoid } from 'nanoid'

  import { DEFAULT_CONFIG as defaultConfig } from '../constant'

  export let bgImg: string = null
  export let src: string = null
  export let preload: string = 'auto'

  let container: HTMLMediaElement
  let player: Plyr

  let config = Object.assign({}, { ...defaultConfig }, {})

  onMount(() => {
    if (container) {
      player = new Plyr(container, config)
    }
  })

  onDestroy(() => {
    player?.destroy()
  })
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video
  bind:this={container}
  id="pl_{nanoid()}"
  data-poster={bgImg}
  {src}
  {preload}
>
  <slot />
</video>
