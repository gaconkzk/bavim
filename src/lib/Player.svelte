<script lang="ts">
  import('./plyr/styles.css')
  import Plyr from 'plyr'
  import('plyr')
  import { onMount } from 'svelte'
  import { DEFAULT_CONFIG } from './constant'

  let container: HTMLElement
  let player

  onMount(() => {
    if (container) {
      player = new Plyr(container, {})
    }
  })
</script>

<video bind:this={container}>
  <track
    kind="captions"
    label="English captions"
    src="/path/to/captions.vtt"
    srclang="en"
    default
  />
</video>
