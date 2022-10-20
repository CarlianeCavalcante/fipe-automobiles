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
  fetchModel,
}: formSearchProps) => {
  const styles: any = useStyles()

  return (
    <form className={styles.boxShadow}>
      <SelectAutocomplete
        options={brandOptions}
        label="Marca"
        value={values.brand}
        placeholder="Selecione a Marca"
        onChange={(value: optionSelect | null) => {
          handleChange(value, 'brand')
          fetchModel(value?.value)
        }}
      />
      <SelectAutocomplete
        options={modelOptions}
        label="Modelo"
        value={values.model}
        placeholder="Selecione o Modelo"
        onChange={(value: optionSelect | null) => {
          handleChange(value, 'model')
          fetchYear(values.brand.value, value?.value)
        }}
      />
      {values.model && (
        <SelectAutocomplete
          options={yearOptions}
          label="Ano"
          value={values.year}
          placeholder="Selecione o Ano"
          onChange={(value: optionSelect | null) => {
            handleChange(value, 'year')
          }}
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
