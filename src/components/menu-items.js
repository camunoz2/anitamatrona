import React from "react"
import MenuItem from "./menu-item"

const MenuIems = ({ open, setOpen }) => {
  return (
    <div>
      {open ? (
        <div className="fixed top-0 left-0 bg-purple-500 w-full h-full">
          <div className="flex flex-col w-full h-full justify-center items-center text-center text-4xl font-bold text-white">
            <div>
              <MenuItem text="Inicio" linkTo="/" />
              <MenuItem text="Blog" linkTo="/blog" />
              <MenuItem text="Sobre Mi" linkTo="/sobre-mi" />
              <MenuItem text="Talleres" linkTo="/todos-talleres" />
              <a
                href="https://wa.me/56992391139"
                className="ml-2 uppercase px-2 py-1 rounded shadow-xl custom-gradient text-white font-hairline"
              >
                whatsapp
              </a>
            </div>
          </div>
        </div>
      ) : (
        <ul className="hidden sm:flex space-around items-center">
          <MenuItem text="Inicio" linkTo="/" />
          <MenuItem text="Blog" linkTo="/blog" />
          <MenuItem text="Sobre Mi" linkTo="/sobre-mi" />
          <MenuItem text="Talleres" linkTo="/todos-talleres" />
          <a
            href="https://wa.me/56992391139"
            className="ml-2 uppercase px-2 py-1 rounded shadow-xl custom-gradient text-white font-hairline"
          >
            whatsapp
          </a>
        </ul>
      )}
    </div>
  )
}

export default MenuIems
