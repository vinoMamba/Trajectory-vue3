declare type Recordable<T = any> = Record<string, T>

declare interface ViteEnv {
    VITE_PORT: number
    VITE_USE_MOCK: boolean
}