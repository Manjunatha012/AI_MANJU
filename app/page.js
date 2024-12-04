'use client'

import LeftSide from '@/components/LeftSide'
import RightSide from '@/components/RightSide'
import Main from '@/components/Main'

export default function Page() {
  console.log(process.env.NODE_ENV)

  return (
    <>
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
      )}
    </>
  )
}
