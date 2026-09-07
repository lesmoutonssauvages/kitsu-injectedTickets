/// <reference types="vite/client" />

declare module 'vuex' {
  export * from 'vuex/types/index.d.ts'
}

declare module 'kitsu-client-js' {
  type KitsuClient = {
    get: (path: string) => Promise<unknown>
    post: (path: string, payload: unknown) => Promise<unknown>
    put: (path: string, payload: unknown) => Promise<unknown>
    delete: (path: string) => Promise<unknown>
    api: {
      deleteHeader: (header: string) => void
      axiosInstance: { defaults: { withCredentials: boolean } }
    }
  }

  const kitsuClient: {
    createClient: (baseURL: string) => KitsuClient
  }

  export default kitsuClient
}
