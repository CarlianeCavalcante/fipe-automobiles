import { Autocomplete, TextField } from '@mui/material'

interface selectAutocompleteProps {
  options: { label: string; value: number }[]
  label: string
  onChange: (any: any, any2: any) => void
  value: {
    label: string
    value: number
  } | null
}

export const SelectAutocomplete = (props: selectAutocompleteProps) => {
  const { options, label, onChange, value } = props

  return (
    <Autocomplete
      isOptionEqualToValue={(option: object, value: object) => option === value}
      disablePortal
      options={options}
      onChange={onChange}
      value={value}
      sx={{ width: 400, my: 2 }}
      renderInput={params => <TextField {...params} label={label} variant="filled" style={{ backgroundColor: 'transparent' }} />}
    />
  )
}
