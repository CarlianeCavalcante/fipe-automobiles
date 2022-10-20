import { Autocomplete, TextField } from '@mui/material'
import { selectAutocompleteProps } from 'types'

export const SelectAutocomplete = ({ options, label, onChange, value, placeholder }: selectAutocompleteProps) => {
  return (
    <Autocomplete
      isOptionEqualToValue={(option: object, value: object) => option === value}
      disablePortal
      options={options}
      onChange={(event: any, value: any) => onChange(value)}
      value={value}
      placeholder={placeholder}
      sx={{ width: '90%', my: 2 }}
      renderInput={(params: any) => (
        <TextField
          {...params}
          size='small'
          InputProps={{
            ...params.InputProps,
            disableUnderline: true,
            style: {
              backgroundColor: 'transparent',
              border: '1px solid #B9B9B9',
              borderRadius: '4px',
            },
          }}
          label={label}
          variant="filled"
          color="primary"
        />
      )}
    />
  )
}
