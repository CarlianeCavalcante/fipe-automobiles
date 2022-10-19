import { AutomobileContextProvider } from '@/context/AutomobileContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AutomobileContextProvider>
      <Component {...pageProps} />
    </AutomobileContextProvider>
  )
}

export default MyApp
