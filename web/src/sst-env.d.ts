/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_REGION: string
  readonly VITE_FOO: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}