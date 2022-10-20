import { AutomobileContextProvider } from '@/context/AutomobileContext'
import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { theme } from '@/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AutomobileContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AutomobileContextProvider>
  )
}

export default MyApp
