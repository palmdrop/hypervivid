// Kudos: https://stackoverflow.com/a/43001581
export type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };