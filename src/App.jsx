import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { MainPage } from './MainPage'
import { CartPage } from './CartPage'
import { Navbar } from './Navbar/Navbar'
import { Allroutes } from './Allroutes/Allroutes'
import { Footer } from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
      <Footer/>
    </div>
  )
}

export default App
