import { Box } from '@mui/system'

export const PageSection = ({children}: any) => {
  return (
    <Box component="section" display="grid" alignItems="center" justifyContent="center" minHeight="100vh" color="#333">
      {children}
    </Box>
  )
}
