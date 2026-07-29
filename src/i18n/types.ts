export type RecursiveRecord =
  | string
  | { [key: string]: RecursiveRecord }
  | RecursiveRecord[]

export type Translations = { [key: string]: RecursiveRecord }

export type Language = "fr" | "en"
