'use client'
import React from 'react'

const leftList = ['Button', 'List', 'Event']

function LeftSide() {
  return (
    <div>
      <h5>
        {leftList.map((i) => (
          <li className='list-none' key={i}>
            <p>{i}</p>
          </li>
        ))}
      </h5>
    </div>
  )
}

export default LeftSide
