export type valuesSearch = {
    automobile: string
    brand: string
    model: string
    year: string
}

export type optionSelect = {
    label: string,
    value: number
}

export type automobileContext = {
    values: {}
    handleChange: (value: any, name: string) => void
  }