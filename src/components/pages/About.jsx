import { useContext } from "react"
import { MyContext } from "../context/MyContext"


const About = () => {

const { name, numero } = useContext(MyContext)

  return (
    <div>
      <h1>About</h1>
      <p>My name is {name} y tu edad es {numero}</p>
    </div>
  )
}

export default About
