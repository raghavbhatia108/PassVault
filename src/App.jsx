import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import './index.css';
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col min-h-screen">
     {/* <Navbar/> */}
     <main className="flex-grow"><Manager/></main>
      
     {/* <Footer/> */}
     </div>
    </>
  )
}

export default App
