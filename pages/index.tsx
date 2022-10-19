import { FormSearchAutomobile } from '@/components/FormSearchAutomobile'
import { Box, Typography } from '@mui/material'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Page } from '@/components/Page'

const useStyles = makeStyles(() =>
  createStyles({
    boxShadow: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF',
      boxShadow: '0 2px 4px rgba(0,0,0,.5)',
      borderRadius: '4px',
    },
    bgColor: {
      backgroundColor: '#eee',
    },
  })
)

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
