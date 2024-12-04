'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import useFetch from '@/hooks/useFetch'

 function Page() {
   const { data, isLoading } = useFetch('http://localhost:3000/api')

   console.log('data', data)

   //  const [user, setUser] = useState(null)
   const [name, setName] = useState('')
   const [age, setAge] = useState('')
   const [email, setEmail] = useState('')

   // Initialize `user` state with fetched data
   //  useEffect(() => {
   //    if (data) {
   //      setUser(data)
   //    }
   //  }, [])

   //  console.log('user', user)

   const addUser = async () => {
     // const newUser = { name, age, email }

     // Simulate adding the user to the backend
     // try {
     //   const response = await fetch('http://localhost:3000/api', {
     //     method: 'POST',
     //     headers: {
     //       'Content-Type': 'application/json',
     //     },
     //     body: JSON.stringify(newUser),
     //   })

     //   if (!response.ok) {
     //     throw new Error(`HTTP error! Status: ${response.status}`)
     //   }
     //   console.log('user Added', name, age, email)
     //   const createdUser = await response.json()

     //   // Update the user state
     //  setUser((prevUsers) => [...prevUsers, createdUser])

     //   // Clear input fields
     setName('')
     setAge('')
     setEmail('')
     // } catch (error) {
     //   console.error('Error adding user:', error.message)
     // }
     alert(`${name} is added to userList Successfully`)
   }

   if (isLoading) return <p>Loading...</p>

   return (
     <div>
       <div>
         <h3>Add New User</h3>
         <input
           type='text'
           placeholder='Name'
           value={name}
           onChange={(e) => setName(e.target.value)}
         />
         <input
           type='number'
           placeholder='Age'
           value={age}
           onChange={(e) => setAge(e.target.value)}
         />
         <input
           type='email'
           placeholder='Email'
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           aria-label='Enter Email'
         />
         <button onClick={addUser}>Add User</button>
       </div>
       <div>
         <h3>User List</h3>
         {data?.map((post) => (
           <div key={post.id}>
             <Link href={`/posts/${post.id}`}>{post.name}</Link>
           </div>
         ))}
       </div>
     </div>
   )
 }

export default Page
