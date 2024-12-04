import { NextResponse } from 'next/server'
import { users } from './users/db'

export const GET = () => {
  const data = users
  return NextResponse.json(data, { status: 200 })
}

// export const post = async (request) => {
//   let payload = await request.json()
//   return NextResponse.json((result = 'Welcome to Nextjs post'), { status: 200 })
// }
export const POST = async (req) => {
  const newUser = await req.json()
  // newUser.id = users.length + 1 // Generate a unique ID
  // users.push(newUser)
  return NextResponse.json(
    { result: 'Post call successfuly done' },
    { status: 201 }
  )
}
