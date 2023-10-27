import { useContext } from "react"
import { MyContext } from "../context/MyContext"


const Home = () => {
  const { name, saludo } = useContext(MyContext)
  return (
    <div>
      <h1>Home</h1>

      <p>mi nombre es {name}</p>
      <p>{saludo}</p>
    </div>
  )
}

export default Home
