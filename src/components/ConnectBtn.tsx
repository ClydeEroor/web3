import React from 'react'

const ConnectBtn = ({ onclick }: { onclick: () => void }) => {
  return (
    <button
      type={'submit'}
      onClick={onclick}
      className={
        'px-10 bg-white hover:bg-violet-500 text-black rounded-xl py-5'
      }
    >
      Connect to Wallet
    </button>
  )
}

export default ConnectBtn
