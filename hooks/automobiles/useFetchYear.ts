import { useApi } from '@/hooks/useApi'
import { handleOptions } from '@/utils/handleOptions'
import httpHeaders from '@/utils/httpHeaders'

export const useFetchYear = () => {
  const { data, makeRequest, loading }: any = useApi((brandId: string | null, modelId: string | null) =>
    httpHeaders.get(`carros/marcas/${brandId}/modelos/${modelId}/anos`)
  )

  return {
    dataYear: data,
    optionsYear: handleOptions(data) ||  [],
    loadingYear: loading,
    fetchYear: makeRequest,
  }
}
