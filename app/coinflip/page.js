'use client'
import React, { useState } from 'react'

function page() {
  const [isHead, setIsHead] = useState(true)

  const urlHead =
    'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg'

  const urlTail =
    'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'

  const flipHandler = () => {
    setIsHead((prev) => !prev)
  }
  return (
    <div className='text-center'>
      <h3>Coin Fliper</h3>
      <img
        src={isHead ? urlHead : urlTail}
        alt={isHead ? urlHead : urlTail}
        style={{
          width: '400px',
          height: '400px',
          marginLeft: '35%',
          borderRadius: '50%',
        }}
      />
      <button onClick={flipHandler} className=''>
        Flip Me
      </button>
    </div>
  )
}

export default page
