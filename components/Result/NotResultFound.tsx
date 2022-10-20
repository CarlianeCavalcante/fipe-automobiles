import { Button, Typography } from '@mui/material'
import Link from 'next/link'

export const NotResultFound = () => {
  return (
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
  )
}
