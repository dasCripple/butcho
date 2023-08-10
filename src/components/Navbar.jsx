import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="container nav_container">
            <Link to="/" className='logo'>
              <img src={Logo} alt="Nav Logo"/>
            </Link>
            nav links
            button
        </div>
    </nav>
  )
}

export default Navbar