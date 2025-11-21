import { useState } from 'react'
import './App.css'
import Manager from './components/Manager'
import './index.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Manager/>
    </>
  )
}

export default App
