import { FormSearchAutomobile } from '@/components/FormSearchAutomobile'
import { Typography } from '@mui/material'
import { Page } from '@/components/Page'


const Initial = () => {
  return (
    <Page>
      <div>
        <Typography align="center" variant="h3" fontWeight="bold" mb={3}>
          Tabela Fipe
        </Typography>
        <Typography align="center" variant="h5" fontWeight="bold" mb={3}>
          Consulte o valor de um veículo de forma gratuita
        </Typography>
        <FormSearchAutomobile />
      </div>
    </Page>
  )
}

export default Initial
