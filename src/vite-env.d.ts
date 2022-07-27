/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="openplayerjs" />

enum TrackKind {
  CAPTIONS = 'captions',
}

type TrackType = {
  kind: TrackKind
  label?: string
  srclang?: string
  isDefault?: boolean
}

type SourceType = {
  src: string
  type?: string
}
