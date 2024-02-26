export interface Name {
    common: string
    official: string
}

export interface Flags {
    png: string
    svg: string
    alt?: string
}

export interface ICountry {
    name: Name
    cca2: string
    capital?: string[]
    region: string
    population: number
    flags: Flags
}