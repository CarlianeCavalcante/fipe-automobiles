import { useApi } from '@/hooks/useApi'
import { handleOptions } from '@/utils/handleOptions'
import httpHeaders from '@/utils/httpHeaders'
import { useEffect, useState } from 'react'

export const useFetchModelByBrand = () => {
  const [optionsBrand, setOptionsBrand] = useState<any>()
  const { data, makeRequest, loading } = useApi((valueBrand: number | null) =>
    httpHeaders.get(`carros/marcas/${valueBrand}/modelos`)
  )

  useEffect(() => {
    if (!data) return

    setOptionsBrand(handleOptions(data['Modelo']))
  }, [data])

  return {
    dataModelByBrand: optionsBrand,
    loadingModelByBrand: loading,
    fetchModelByBrand: makeRequest,
  }
}
