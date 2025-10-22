import { useState } from 'react'
import Header from './components/Header'
import ParticleBackground from './components/ParticleBackground'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParticleBackground />
      <Header />
    </>
  )
}

export default App
