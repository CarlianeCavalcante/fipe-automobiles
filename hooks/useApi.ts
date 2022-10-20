import { useState, useEffect } from 'react'

export const useApi = (requester: any) => {
  const [data, setData] = useState(null)
  const [status, setStatus] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const makeRequest = async (...args: []) => {
    setLoading(true)
    setError(null)

    try {
      const result = await requester(...args)
      setData(result.data)
      setStatus(result.statusText)
      return result
    } catch (err: any) {
      if (!err.response) throw err
      setStatus(err.response.status)
      setError(err.response.data)

      return err.response
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => {
      setError(null)
      setData(null)
      setStatus(null)
    }
  }, [])

  return {
    data,
    status,
    error,
    loading,
    makeRequest,
  }
}
