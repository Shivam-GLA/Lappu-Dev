import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (
    <>
      <Navbar logo="Vuexy"/>
      <Home heading="Welcome to Vuexy!" subHeading="Please sign-in to your account and start the adventure" adminId="admin@demo.com/Pass: admin" clientId="client@demo.com/Pass: client" placeholder="admin@demo.com"/>
    </>
  )
}

export default App
