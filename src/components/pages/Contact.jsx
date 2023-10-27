import { useContext } from "react"
import { MyContext } from "../context/MyContext"


const Contact = () => {
  const { setName, name} = useContext(MyContext)
  return (
    <div>
      <h1>Contact</h1>

      <form>
<input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

      </form>
    </div>
  )
}

export default Contact
