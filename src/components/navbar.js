import React from "react"

import MenuItem from "./menu-item"

import logo from "../assets/logo.png"
import HamburgerIcon from "../components/hamburger-icon"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mt-6">
      <div>
        <img src={logo} alt="logo" className="w-24" />
      </div>
      <ul className="hidden sm:flex space-around items-center">
        <MenuItem text="Inicio" linkTo="/" />
        <MenuItem text="Blog" linkTo="/blog" />
        <MenuItem text="Sobre Mi" linkTo="/sobre-mi" />
        <MenuItem text="Talleres" linkTo="/todos-talleres" />
        <MenuItem text="Proximo Taller" linkTo="/taller" />
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
