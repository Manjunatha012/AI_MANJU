'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profile from '@/public/next.svg'

function Header() {
  return (
    <div className='header'>
      <nav>
        <Image src={profile} width={100} />
        {/* <img src={profile.src} width={'135px'} /> */}
        <Link className='link' href='/'>
          Home
        </Link>
        <Link className='link' href='/todos'>
          Todos
        </Link>
        <Link className='link' href='/quiz'>
          Quiz
        </Link>
        <Link className='link' href='/coinflip'>
          Coin Flip
        </Link>
        <Link className='link' href='/quiz/nested'>
          Nested
        </Link>
        <Link className='link' href='/posts'>
          posts
        </Link>
        <Link className='link' href='/potos'>
          Users
        </Link>
      </nav>
    </div>
  )
}

export default Header
