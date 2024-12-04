'use client'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import classes from '@/styles/outer.module.css'
import { Roboto } from 'next/font/google'

const fontRoboto = Roboto({
  weight: '100',
  subsets: ['greek'],
  display: 'fallback',
})

function pages() {
  const pathname = usePathname() // Get the current pathname
  const id = pathname.split('/').pop()

  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  const postData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      const postRes = await response.json()
      console.log(postRes)

      setPost(postRes)
      setLoading(false)
    } catch (error) {
      console.error('error when getting posts', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!id) return

    postData()
  }, [id])

  return (
    <div>
      <h4>welcome to post pages</h4>
      {loading ? (
        <p>Loading.........</p>
      ) : post.id ? (
        <div className={classes.main}>
          <h5>Title : {post.title}</h5>
          <p>Body : {post.body}</p>
          <br />
          <h1>Welcome next fonts</h1>
          <h1 className={fontRoboto.className}>Welcome next fonts</h1>
        </div>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  )
}

export default pages
