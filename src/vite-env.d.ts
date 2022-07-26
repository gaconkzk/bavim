/// <reference types="svelte" />
/// <reference types="vite/client" />

enum TrackKind {
  CAPTIONS = 'captions',
}

type TrackType = {
  kind: TrackKind
  label?: string
  srclang?: string
  isDefault?: boolean
}
