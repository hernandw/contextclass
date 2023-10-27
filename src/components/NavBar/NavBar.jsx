import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="d-flex justify-content-between">
      <div>Logo</div>
          <div>
            <ul className="d-flex gap-3">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>    
                  <li><Link to="/contact">Contact</Link></li>
              
            </ul>
      </div>
    </div>
  )
}

export default NavBar
