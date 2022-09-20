import React, { useEffect } from 'react'
import ClientForm from './ClientForm'
import { addClientData } from '../apis/clientData'
import { Routes, Route } from 'react-router-dom'
import Thankyou from './Thankyou'

const App = () => {
  useEffect(() => {
    const formData = {
      name: 'fruitbag 22',
      email:
        'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2030&q=80',
      areaOfLaw: 'Criminal',
      parties: 'FakeLawFirm',
      details: 'unjustified dismissal',
      outcome: 'compensation and a good reference',
      contractQ: 'can they dismiss me under my contract?',
      file: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2030&q=80',
      anythingElse: 'no',
    }

    addClientData(formData)
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }, [])

  return (
    <div className="flex flex-col  items-center bg-sky-200 h-screen w-screen">
      <Routes>
        <Route path="/clientform" element={<ClientForm />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </div>
  )
}

export default App
