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
  handleChange: (value: any, name: string) => void
  fetchYear: any
  fetchModel: any,
}

export type selectAutocompleteProps = {
  options: { label: string; value: number }[]
  label: string
  placeholder: string
  onChange: (any: any) => void
  value: {
    label: string
    value: number
  } | null
}

export type automobileContext = {
  values: any
  handleChange: (value: any, name: string) => void 
}
