import { useAutomobileContext } from '@/context/AutomobileContext'
import { useApi } from '@/hooks/useApi'
import httpHeaders from '@/utils/httpHeaders'

export const useFetchResult = () => {
  const { values } = useAutomobileContext()
  const {brand, model, year}: any = values
  const { data, makeRequest, loading } = useApi(() =>
    httpHeaders.get(`carros/marcas/${brand.value}/modelos/${model.value}/anos/${year.value}`)
  )

  return {
    dataResult: data,
    loadingResult: loading,
    fetchResult: makeRequest,
  }
}
