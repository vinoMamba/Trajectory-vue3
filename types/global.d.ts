declare type Recordable<T = any> = Record<string, T>

declare interface ViteEnv {
    VITE_PORT: number
    VITE_USE_MOCK: boolean
}

declare type Category = "+" | "-"

declare interface Tag {
    id: number
    name: string
    iconName: string
    category: Category
}