export type values = {
  automobile: string
  brand: string
  model: string
  year: string
}

export type boxResult = {
  brand: string
  model: string
  year: string
  value: string
  useStyles: any
}

export type optionSelect = {
  label: string
  value: string
}

export type formSearchProps = {
  useStyles: any 
  brandOptions: any[]
  modelOptions: any[]
  yearOptions: any[]
  values: any
  handleChange: (any: any, any2: string) => {}
}

export type selectAutocompleteProps = {
  options: { label: string; value: number }[]
  label: string
  onChange: (any: any, any2: any) => void
  value: {
    label: string
    value: number
  } | null
}

export type automobileContext = {
  values: {}
  handleChange: (value: any, name: string) => void
}
