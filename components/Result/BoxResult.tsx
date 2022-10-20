import { Box, Typography } from '@mui/material'
import { boxResult } from 'types'

export const BoxResult = ({ brand, model, year, value,useStyles }: boxResult) => {
  const style: any = useStyles()
  return (
    <Box className={style.boxResult} >
      <Typography variant="h4" fontWeight="bold">
        Tabela Fipe: Preço {brand} {model} {year}
      </Typography>
      <Box style={{ backgroundColor: '#009a8a', padding: '8px 15px', borderRadius: '27px' }}>
        <Typography variant="h5" color="#fff" fontWeight="bold">
          {value}
        </Typography>
      </Box>
      <Typography variant="h6" color="#a5aaa8" fontWeight="bold" style={{ fontSize: '14px' }}>
        Este é o Preço de compra do veículo
      </Typography>
    </Box>
  )
}
