import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Card } from "./Card"
import './index.css'
import { Hero } from './Hero'
import { Footer } from './Footer'


function App() {

  return (
    <>
      <Hero />
    <div className=' flex justify-center my-7'>
      <Card />
    </div>
    <Footer />
    </>  
  )
}

export default App