// 2- links com react router

import "./Navbar.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/formacao">Formação</NavLink>
        <NavLink to="/contatos">Contatos</NavLink>
    </nav>
  )
}

export default Navbar