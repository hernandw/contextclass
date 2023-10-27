/* import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import MyRoutes from './components/Routes/MyRoutes'
import { MyContext } from './components/context/MyContext'

const App = () => {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState()
  const numero = 15
  const saludo = 'hola como estas'
  return (
    <div>
      <MyContext.Provider value={{ name, setName, numero, lastname, setLastname }}>
      <NavBar />
        <MyRoutes />
      </MyContext.Provider>
    </div>
  )
}

export default App */

import NavBar from "./components/NavBar/NavBar"
import MyRoutes from "./components/Routes/MyRoutes"
import { ProviderContext } from "./components/context/MyContext"





const App = () => {
  return (
    <ProviderContext>
      <div>
        <NavBar />
        <MyRoutes />
      </div>
    </ProviderContext>
  );
}

export default App
