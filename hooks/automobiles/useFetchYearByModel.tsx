import { useApi } from '@/hooks/useApi'
import { handleOptions } from '@/utils/handleOptions'
import httpHeaders from '@/utils/httpHeaders'

export const useFetchYearByModel = () => {
  const { data, makeRequest, loading } = useApi((valueBrand: number | null, valueModel: number | null) =>
    httpHeaders.get(`carros/marcas/${valueBrand}/modelos/${valueModel}/anos`)
  )

  const optionsYear = handleOptions(data) || []

  return {
    dataYearByModel: optionsYear,
    loadingYearByModel: loading,
    fetchYearByModel: makeRequest,
  }
}
