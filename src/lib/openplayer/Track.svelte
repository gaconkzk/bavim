<script lang="ts">
  export let kind = TrackKind.CAPTIONS
  export let label: string = null
  export let srclang: string = null
  export let src: string = null

  export let isDefault = false
</script>

<track {kind} {label} {src} {srclang} default={isDefault} />
