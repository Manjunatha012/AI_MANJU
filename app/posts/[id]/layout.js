import React from 'react'

function PostLayout({ children }) {
  return <div>{children}</div>
}

export default PostLayout

export function generateMetadata() {
  return {
    title: 'Manju-app',
    description: ' nextjs is my own style',
  }
}
