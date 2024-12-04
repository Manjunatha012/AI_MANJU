import React from 'react'

function Score({ score, retryHandler }) {
  return (
    <div className='m-auto pt-5'>
      <h2>Result</h2>
      <h5 className='text-green-300'>
        Score :
        <span className={`${score < 3 ? 'text-red-500' : 'text-green-500'}`}>
          {score}
        </span>
      </h5>
      <button
        className='bg-yellow-500 text-white my-3 py-1 px-2 text-sm rounded mx-2'
        onClick={retryHandler}
      >
        Retry
      </button>
    </div>
  )
}

export default Score
