import { useState, useEffect } from 'react'

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null) // Default is `null` for flexibility
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true) // Ensure loading state is accurate during refetching
      setError(null) // Clear previous errors

      try {
        const response = await fetch(url, options)

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false) // Ensure loading stops in both success and error cases
      }
    }

    fetchData()
  }, []) // Add `url` and `options` as dependencies

  return { data, loading, error }
}

export default useFetch
