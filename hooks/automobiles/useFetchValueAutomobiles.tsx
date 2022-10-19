import { useAutomobileContext } from '@/context/AutomobileContext'
import { useApi } from '@/hooks/useApi'
import httpHeaders from '@/utils/httpHeaders'
import { valuesSearch } from 'types'

export const useFetchValueAutomobiles = () => {
  const { values } = useAutomobileContext()
  const {brand, model, year}: any = values
  const { data, makeRequest, loading } = useApi(() =>
    httpHeaders.get(`carros/marcas/${brand.value}/modelos/${model.value}/anos/${year.value}`)
  )

  return {
    dataValueAutomobiles: data,
    loadingValueAutomobiles: loading,
    fetchValueAutomobiles: makeRequest,
  }
}
