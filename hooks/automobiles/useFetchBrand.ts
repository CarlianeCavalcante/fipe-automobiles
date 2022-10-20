import { useApi } from '@/hooks/useApi'
import { handleOptions } from '@/utils/handleOptions'
import httpHeaders from '@/utils/httpHeaders'

export const useFetchBrand = () => {
  const { data, makeRequest, loading } = useApi(() => httpHeaders.get(`carros/marcas`))

  return {
    dataBrand: data,
    optionsBrand: handleOptions(data) || [],
    loadingBrand: loading,
    fetchBrand: makeRequest,
  }
}
