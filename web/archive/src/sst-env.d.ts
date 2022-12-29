/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_REGION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}