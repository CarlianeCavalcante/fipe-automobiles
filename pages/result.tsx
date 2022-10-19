import { Button, Typography } from '@mui/material'
import { Box } from '@material-ui/core'
import { useFetchValueAutomobiles } from '@/hooks/automobiles'
import { useEffect } from 'react'
import Link from 'next/link'
import { createStyles, makeStyles } from '@material-ui/styles'
import { Page } from '@/components/Page'

const Result = () => {
  const { dataValueAutomobiles, fetchValueAutomobiles } = useFetchValueAutomobiles()

  useEffect(() => {
    fetchValueAutomobiles()
  }, [])

  return (
    <Page>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {dataValueAutomobiles ? (
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap:15,
              backgroundColor: 'rgb(124,204,171, 0.3)',
              padding: '30px 200px',
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              Tabela Fipe: Preço {dataValueAutomobiles?.Marca} {dataValueAutomobiles?.Modelo} {dataValueAutomobiles?.AnoModelo}
            </Typography>
            <Box style={{ backgroundColor: '#009a8a', padding: '8px 15px', borderRadius: '27px' }}>
              <Typography variant="h5" color="#fff" fontWeight="bold">
                {dataValueAutomobiles?.Valor}
              </Typography>
            </Box>
            <Typography variant="h6" color="#a5aaa8" fontWeight="bold" style={{fontSize: '14px'}}>
              Este é o Preço de compra do veículo
            </Typography>
          </Box>
        ) : (
          <>
            <Typography align="center" variant="h5" fontWeight="bold" mb={3}>
              Não encontramos nenhum resultado
            </Typography>
            <Link href="/" passHref>
              <Button variant="contained" color="primary" size="large">
                Refazer Consulta
              </Button>
            </Link>
          </>
        )}
      </div>
    </Page>
  )
}

export default Result
