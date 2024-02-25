import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Card } from "./Card"
import './index.css'
import { Hero } from './Hero'
import { Footer } from './Footer'
import { Output } from './Output'


function App() {

  return (
    <>
      <Hero />
    <div className=' flex justify-center my-7'>
      <Card />
    </div>
    {/* <Output response={""} /> */}
    <Footer />
    </>  
  )
}

export default App