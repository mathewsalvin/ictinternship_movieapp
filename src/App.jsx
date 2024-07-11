import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import View from './components/View'
import Record from './components/View'
import Add from './components/Add'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Routes>
      <Route path='/' element={<View/>}></Route>
      <Route path='/Add' element={<Add/>}></Route>
      </Routes>
    </>
  )
}

export default App