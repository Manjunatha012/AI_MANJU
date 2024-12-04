'use client'
import React, { useState } from 'react'
import qBank from '@/components/QuationBank'
import Quetion from '@/components/Quetion'
import Score from '@/components/Score'
import { usePathname } from 'next/navigation'
// import { redirect } from 'next/navigation'

function page() {
  // redirect('/todo')
  const pathname = usePathname()

  const [cQuestion, setCQuestion] = useState(0)
  const [option, setOption] = useState('')
  const [score, setScore] = useState(0)
  const [quizEnd, setQuizEnd] = useState(false)

  const handleChange = (e) => {
    setOption(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    checkAnswer()
    handleNextQuestion()
  }
  const checkAnswer = () => {
    if (option === qBank[cQuestion].answer) {
      setScore((prevScore) => prevScore + 1)
    }
  }
  const handleNextQuestion = () => {
    if (cQuestion + 1 < qBank.length) {
      setCQuestion((prevQuestion) => prevQuestion + 1)
      setOption('')
    } else {
      setQuizEnd(true)
    }
  }
  const retryHandler = () => {
    setCQuestion(0)
    setOption('')
    setScore(0)
    setQuizEnd(false)
  }

  return (
    <div className='text-center'>
      <p>Quiz page</p>
      {pathname == '/quiz' && <p>Welcome to Quiz</p>}

      {!quizEnd ? (
        <Quetion
          question={qBank[cQuestion]}
          handleChange={handleChange}
          option={option}
          submitHandler={submitHandler}
        />
      ) : (
        <Score score={score} retryHandler={retryHandler} />
      )}
    </div>
  )
}

export default page
