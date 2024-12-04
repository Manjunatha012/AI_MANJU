'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Page() {
  const [potos, setPotos] = useState(null)
  const [loading, setloading] = useState(true)

  const fetchPotos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const respData = await response.json()
      setPotos(respData)
      setloading(false)
    } catch (error) {
      console.error('error fatching potos', error)
    }
  }
  useEffect(() => {
    fetchPotos()
  }, [])

  return (
    <>
      <div>Potos Page</div>
      {loading ? (
        <p>Loading........</p>
      ) : (
        potos.map((poto) => (
          <div key={poto.id}>
            <h3 className='p-3'>
              {poto.id} <Link href={`/potos/${poto.id}`}> {poto.name}</Link>
            </h3>
            <br />
          </div>
        ))
      )}
    </>
  )
}

export default Page
