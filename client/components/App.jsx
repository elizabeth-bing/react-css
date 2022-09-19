import React, { useEffect } from 'react'
import Fruits from './Fruits'
import ClientForm from './ClientForm'
import { getClientData } from '../apis/clientData'

const App = () => {
  useEffect(() => {
    getClientData()
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }, [])

  return (
    <div className="flex flex-col  items-center bg-sky-200 h-screen w-screen">
      <h1 className="text-3xl font-bold text-neutral-800 py-6">
        How can we help you today?
      </h1>
      <Fruits />
      <ClientForm />
    </div>
  )
}

export default App
