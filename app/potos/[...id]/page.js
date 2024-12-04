'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function page() {
  const [poto, setPoto] = useState(null)
  const [loading, setloading] = useState(true)

  const params = useParams()
  const id = params.id?.[0]
  console.log(id)

  const detailPoto = async () => {
    try {
      const fetcher = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      )
      const data = await fetcher.json()
      setPoto(data)
      console.log(data)

      setloading(false)
    } catch (error) {}
  }

  useEffect(() => {
    detailPoto()
  }, [])

  return (
    <div>
      {loading ? (
        <p>Loading......</p>
      ) : poto ? (
        <div>
          <h4>{poto.name}</h4>
          <p>{poto.email}</p>
          <p>{poto.username}</p>
        </div>
      ) : (
        <p> Potho not found</p>
      )}
    </div>
  )
}

export default page
