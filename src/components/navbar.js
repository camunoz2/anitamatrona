import React from "react"
import { Link } from "gatsby"

import logo from "../assets/logo.png"
import HamburgerIcon from "../components/hamburger-icon"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mt-6">
      <div>
        <img src={logo} alt="logo" className="w-24" />
      </div>
      <ul className="hidden sm:flex space-around items-center">
        <div className="px-2">
          <Link to="/">inicio</Link>
        </div>
        <div className="px-2">
          <Link to="./sobre-mi">sobre mi</Link>
        </div>
        <div className="px-2">
          <Link to="./servicios">servicios</Link>
        </div>
        <div className="px-2">talleres</div>
        <div className="px-2">blog</div>
        <a
          href="https://wa.me/56992391139"
          className="ml-2 uppercase px-2 py-1 rounded shadow-xl custom-gradient text-white font-hairline"
        >
          whatsapp
        </a>
      </ul>
      <button className="p-2 sm:hidden">
        <HamburgerIcon />
      </button>
    </nav>
  )
}

export default Navbar
