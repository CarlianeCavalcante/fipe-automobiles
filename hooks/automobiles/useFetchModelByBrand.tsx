import { useApi } from '@/hooks/useApi'
import { handleOptions } from '@/utils/handleOptions'
import httpHeaders from '@/utils/httpHeaders'

export const useFetchModelByBrand = () => {
  const { data, makeRequest, loading } = useApi(valueBrand => httpHeaders.get(`carros/marcas/${valueBrand}/modelos`))

  const optionsBrand = handleOptions(data?.modelos) || []

  return {
    dataModelByBrand: optionsBrand,
    loadingModelByBrand: loading,
    fetchModelByBrand: makeRequest,
  }
}
