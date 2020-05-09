import React from "react"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mt-6">
      <div>
        <img src={logo} alt="logo" className="w-24" />
      </div>
      <ul className="flex space-around items-center">
        <div className="px-2">inicio</div>
        <div className="px-2">sobre mi</div>
        <div className="px-2">servicios</div>
        <div className="px-2">talleres</div>
        <div className="px-2">blog</div>
        <div className="ml-2 uppercase px-2 py-1 rounded shadow-xl custom-gradient text-white font-hairline">
          contacto
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
