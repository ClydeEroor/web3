import React, { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className={'flex w-full flex flex-col p-10 min-h-[100vh] bg-black'}>
        {children}
      </div>
    </>
  )
}

export default Layout
