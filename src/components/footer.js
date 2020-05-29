import React from "react"

const Footer = () => {
  return (
    <div className="py-10 custom-gradient px-4">
      <p className="text-center text-gray-200 text-2xl">
        También realizo atención online por mi
        <span className="text-xl font-extrabold bg-blue-500 px-2 py-1">
          <a
            href="http://www.facebook.com/matronaanita"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook
          </a>
        </span>
        o por
        <span className="text-xl font-extrabold bg-green-500 px-2 py-1">
          <a
            href="https://wa.me/56992391139"
            target="_blank"
            rel="noopener noreferrer"
          >
            whatsapp
          </a>
        </span>
        , o por
        <span className="text-xl font-extrabold bg-purple-500 px-2 py-1">
          <a
            href="http://www.instagram.com/anitarukakuyen"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
        </span>
        donde me pueden escribir y compartir experiencias.
      </p>
    </div>
  )
}

export default Footer
