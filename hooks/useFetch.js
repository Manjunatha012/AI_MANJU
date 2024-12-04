import { useState, useEffect } from 'react'

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options)

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const result = await response.json()
        setData(result)
        setLoading(false)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}

export default useFetch
