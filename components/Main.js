'use client'
import React from 'react'
import './todo.css'
import { useRouter } from 'next/navigation'

function Main() {
  const router = useRouter()

  const routeHandler = (item) => {
    router.push(item)
  }
  return (
    <div className='text-white'>
      <p>Welcome to NextJS projects</p>
      <p>{process.env.NODE_ENV}</p>
      <br />
      <br />
      <button
        className='bg-yellow-500 w-15 px-3 py-2 rounded  '
        onClick={() => routeHandler('/todos')}
      >
        Todos
      </button>
      <br />
      <br />
      <button
        className='bg-yellow-500 px-3 py-2 rounded '
        onClick={() => router.push('/quiz')}
      >
        Quiz
      </button>
      <br />
      <br />
      <button
        className='bg-yellow-500 px-3 py-2 rounded '
        onClick={() => router.push('/coinflip')}
      >
        Coinflip
      </button>
      <br />
      <br />
      <button
        className='bg-yellow-500 px-3 py-2 rounded '
        onClick={() => router.push('/todos')}
      >
        Todos
      </button>
      <br />
      <br />
      <button
        className='bg-yellow-500 px-3 py-2 rounded '
        onClick={() => router.push('/quiz/nested')}
      >
        Nested
      </button>
      <br />
      <br />
      <button
        className='bg-yellow-500 px-3 py-2 rounded '
        onClick={() => router.push('/potos')}
      >
        Users
      </button>
      <br />
      <br />
      <button
        className='bg-yellow-500 px-3 py-2 rounded '
        onClick={() => router.push('/posts')}
      >
        Posts
      </button>
      <br />
      <br />
      <button
        className='bg-yellow-500 px-3 py-2 rounded '
        onClick={() => router.push('/posts')}
      >
        Posts
      </button>
      <br />
      <br />
      <button
        className='bg-yellow-500 px-3 py-2 rounded '
        onClick={() => router.push('/posts')}
      >
        Posts
      </button>
      <br />
      <br />
      <button
        className='bg-yellow-500 px-3 py-2 rounded '
        onClick={() => router.push('/posts')}
      >
        Posts
      </button>
      <br />
      <br />
    </div>
  )
}

export default Main
