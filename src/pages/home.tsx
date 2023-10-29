import React, { useEffect, useState } from 'react'
import Layout from '@/src/components/Layout'
import { Web3 } from 'web3'
import ConnectBtn from '@/src/components/ConnectBtn'

const CategoryInput = () => {
  const [userAccount, setUserAccount] = useState(null)

  const connectToWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum)
      try {
        const acc = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        setUserAccount(acc)
        console.log(acc)
      } catch (err) {
        console.error(err)
      }
    }
  }

  return (
    <>
      <Layout>
        <div className={'max-w-full h-full flex justify-end'}>
          <ConnectBtn onclick={connectToWallet} />
        </div>

        {userAccount && (
          <div className={'flex w-full flex-col'}>
            <p>Wallet is connected</p>
            <p>{userAccount}</p>
          </div>
        )}
      </Layout>
    </>
  )
}

export default CategoryInput
