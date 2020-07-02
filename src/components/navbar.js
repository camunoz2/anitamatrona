import React, { useState } from "react"

import MenuItems from "./menu-items"

import logo from "../assets/logo.png"
import HamburgerIcon from "../components/hamburger-icon"
import { Link } from "gatsby"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center mt-6">
      <Link to="/">
        <img src={logo} alt="logo" className="w-24" />
      </Link>
      {open && (
        <button
          className="absolute right-0 top-0 mr-10 py-10 z-10"
          onClick={() => setOpen(false)}
        >
          <div className="font-extrabold text-white">X</div>
          <p className="text-sm font-hairline text-white">Cerrar Menu</p>
        </button>
      )}
      <MenuItems open={open} setOpen={setOpen} />
      <button className="p-2 sm:hidden" onClick={() => setOpen(true)}>
        <HamburgerIcon />
      </button>
    </nav>
  )
}

export default Navbar
