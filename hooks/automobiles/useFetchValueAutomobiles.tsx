import { useAutomobileContext } from '@/context/AutomobileContext'
import { useApi } from '@/hooks/useApi'
import httpHeaders from '@/utils/httpHeaders'
import { valuesSearch } from 'types'

export const useFetchValueAutomobiles = () => {
  const {values} = useAutomobileContext()
  const { data, makeRequest, loading } = useApi(() =>
    httpHeaders.get(`carros/marcas/${values.brand.value}/modelos/${values.model.value}/anos/${values.year.value}`)
  )

  return {
    dataValueAutomobiles: data,
    loadingValueAutomobiles: loading,
    fetchValueAutomobiles: makeRequest,
  }
}
