// 2- links com react router

import "./Navbar.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        {/* <Link to="/" >Home</Link>
        <Link to="/about" >Sobre</Link> */}
        <NavLink to="/">Sobre</NavLink>
        <NavLink to="/formacao">Formação</NavLink>
    </nav>
  )
}

export default Navbar