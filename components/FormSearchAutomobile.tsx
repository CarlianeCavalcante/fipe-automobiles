import { Button } from '@mui/material'
import { useAutomobileContext } from '@/context/AutomobileContext'
import { useEffect } from 'react'
import { SelectAutocomplete } from '@/components/SelectAutocomplete'
import { useFetchBrand, useFetchModelByBrand, useFetchYearByModel } from '@/hooks/automobiles'
import Link from 'next/link'
import { optionSelect } from 'types'

interface useFetchModelByBrand {
  dataModelByBrand: any[],
  fetchModelByBrand: (any: any) => {}
}

interface useFetchYearByModel {
  dataYearByModel: any[],
  fetchYearByModel: (any: any, any2: any) => {}
}

export const FormSearchAutomobile = () => {
  const { values, handleChange }: any = useAutomobileContext()
  const { dataBrand, fetchBrand } = useFetchBrand()
  const { dataModelByBrand, fetchModelByBrand }: useFetchModelByBrand = useFetchModelByBrand()
  const { dataYearByModel, fetchYearByModel}: useFetchYearByModel = useFetchYearByModel()

  useEffect(() => {
    fetchBrand()
  }, [])

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        boxShadow: '0 2px 4px rgba(0,0,0,.5)',
        borderRadius: '4px',
        padding: '16px 50px',
      }}
    >
      <SelectAutocomplete
        options={dataBrand}
        label="Carro"
        value={values.brand}
        onChange={(event: any, newValue: optionSelect | null) => {
          handleChange(newValue, 'brand')
          fetchModelByBrand(newValue?.value)
        }}
      />
      <SelectAutocomplete
        options={dataModelByBrand}
        label="Modelo"
        value={values.model}
        onChange={(event: any, newValue: optionSelect | null) => {
          handleChange(newValue, 'model')
          fetchYearByModel(values.brand.value, newValue?.value)
        }}
      />
      {values.model && (
        <SelectAutocomplete
          options={dataYearByModel}
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
