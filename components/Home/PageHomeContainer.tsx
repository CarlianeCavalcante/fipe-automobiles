import { Typography } from '@mui/material'
import { PageSection } from '@/components/PageSection'
import { FormSearchAutomobile } from './FormSearchAutomobile'
import { useFetchBrand, useFetchModel, useFetchYear } from '@/hooks/automobiles'
import { useAutomobileContext } from '@/context/AutomobileContext'
import { useEffect } from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'

const useStyles: any = makeStyles(() =>
  createStyles({
    boxShadow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: '#FFF',
      borderRadius: '4px',
      padding: '5% 5%',
      boxShadow: '0 2px 4px rgba(0,0,0,.5)',
    },
  })
)

export const PageHomeContainer = () => {
  const { values, handleChange } = useAutomobileContext()
  const { optionsBrand, fetchBrand }: any = useFetchBrand()
  const { optionsModel, fetchModel }: any = useFetchModel()
  const { optionsYear, fetchYear }: any = useFetchYear()

  useEffect(() => {
    fetchBrand()
  }, [])

  return (
    <PageSection>
      <div>
        <Typography align="center" variant="h4" fontWeight="bold" mb={1}>
          Tabela Fipe
        </Typography>
        <Typography align="center" variant="h6" fontWeight="bold" mb={2}>
          Consulte o valor de um veículo de forma gratuita
        </Typography>
        <FormSearchAutomobile
          brandOptions={optionsBrand}
          modelOptions={optionsModel}
          yearOptions={optionsYear}
          values={values}
          handleChange={handleChange}
          useStyles={useStyles}
          fetchModel={fetchModel}
          fetchYear={fetchYear}
        />
      </div>
    </PageSection>
  )
}
