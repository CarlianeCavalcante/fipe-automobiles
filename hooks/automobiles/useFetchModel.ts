import { useApi } from '@/hooks/useApi'
import { handleOptions } from '@/utils/handleOptions'
import httpHeaders from '@/utils/httpHeaders'

export const useFetchModel = () => {
  const { data, makeRequest, loading }: any = useApi((brandId: string | null) => httpHeaders.get(`carros/marcas/${brandId}/modelos`))

  return {
    dataModel: data,
    optionsModel: handleOptions(data?.modelos) || [],
    loadingModel: loading,
    fetchModel: makeRequest,
  }
}
