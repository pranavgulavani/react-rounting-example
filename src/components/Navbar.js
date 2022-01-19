import './Navbar.css'
import { Contact } from './Contact'
import {About} from './About'
import {NavLink} from 'react-router-dom'
export const NavBar = () => {
    return(
        <>
         <nav>
           <h3>CompanyLogo</h3>
            <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about"  >About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </ul>
       </nav>
      

        </>
      
    )
}