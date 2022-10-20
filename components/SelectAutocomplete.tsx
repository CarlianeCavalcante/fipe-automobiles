import { Autocomplete, TextField } from '@mui/material'
import { selectAutocompleteProps } from 'types'

export const SelectAutocomplete = ({ options, label, onChange, value }: selectAutocompleteProps) => {
  return (
    <Autocomplete
      isOptionEqualToValue={(option: object, value: object) => option === value}
      disablePortal
      options={options}
      onChange={onChange}
      value={value}
      sx={{ width: 400, my: 2 }}
      renderInput={(params: any) => (
        <TextField
          {...params}
          InputProps={{ ...params.InputProps, disableUnderline: true }}
          label={label}
          fullWidth
          variant="filled"
          color="primary"
        />
      )}
    />
  )
}
