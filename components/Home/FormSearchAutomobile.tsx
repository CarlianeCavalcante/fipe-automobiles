import { Button } from '@mui/material'
import { SelectAutocomplete } from '@/components/SelectAutocomplete'
import Link from 'next/link'
import { formSearchProps, optionSelect } from 'types'

export const FormSearchAutomobile = ({
  useStyles,
  brandOptions,
  modelOptions,
  yearOptions,
  values,
  handleChange,
  fetchYear,
  fetchModel
}: formSearchProps) => {
  const styles: any = useStyles()

  return (
    <form className={styles.boxShadow}>
      <SelectAutocomplete
        options={brandOptions}
        label="Carro"
        value={values.brand}
        onChange={(event: any, newValue: optionSelect | null) => {
          handleChange(newValue, 'brand')
          fetchModel(newValue?.value)
        }}
      />
      <SelectAutocomplete
        options={modelOptions}
        label="Modelo"
        value={values.model}
        onChange={(event: any, newValue: optionSelect | null) => {
          handleChange(newValue, 'model')
          fetchYear(values.brand.value, newValue?.value)
        }}
      />
      {values.model && (
        <SelectAutocomplete
          options={yearOptions}
          value={values.year}
          onChange={(event: any, newValue: optionSelect | null) => {
            handleChange(newValue, 'year')
          }}
          label="Ano"
        />
      )}
      <Link href="/result" passHref>
        <Button
          variant="contained"
          color="primary"
          disabled={!(values.brand && values.model && values.year)}
          size="large"
          sx={{ my: 2 }}
        >
          Consultar preço
        </Button>
      </Link>
    </form>
  )
}
