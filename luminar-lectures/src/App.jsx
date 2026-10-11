// import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import Home from './Home'
import { Toaster } from 'sonner'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Home />
      <Toaster position="top-center" richColors />
    </>
  )
}

export default App
