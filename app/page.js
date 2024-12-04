'use client'

import LeftSide from '@/components/LeftSide'
import RightSide from '@/components/RightSide'
import Main from '@/components/Main'

export default function page() {
  console.log(process.env.NODE_ENV)

  return (
    <>
      {process.env.NODE_ENV === 'development' ? (
        <div className='container'>
          <div className='content'>
            <aside className='sidebar leftside'>
              <LeftSide />
            </aside>
            <main className='main'>
              <Main />
            </main>
            <aside className='sidebar rightside'>
              <RightSide />
            </aside>
          </div>
        </div>
      ) : (
        <>
          <p>Your on production</p>
          {process.env.NODE_ENV}
        </>
      )}
    </>
  )
}
