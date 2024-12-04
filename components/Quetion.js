import React from 'react'

function Quetion({ handleChange, submitHandler, option, question }) {
  return (
    <div>
      <div>
        <h4>
          {question.id}.{question.question}
        </h4>
        <ol>
          {question.options.map((a, index) => (
            <div key={index} className='d-flex flex-column align-left'>
              <label>
                <input
                  type='radio'
                  value={a}
                  onChange={handleChange}
                  checked={option === a}
                />
                {a}
              </label>
            </div>
          ))}
        </ol>
        <button
          className={`${
            option ? 'bg-blue-500' : 'bg-blue-200'
          } text-white py-1 px-2 text-sm rounded mx-2`}
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
      {/* ))} */}
    </div>
  )
}

export default Quetion
