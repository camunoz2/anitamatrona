import React from "react"

const LastinstaPost = ({ img, caption, url }) => {
  return (
    <div className="w-full custom-gradient text-left py-10">
      <div className="container mx-auto flex flex-col p-2 md:p-32 text-gray-100 text-xl">
        <h2 className="text-md  mb-4 text-center md:text-left md:text-6xl font-black text-gradient z-10">
          Reflexiones desde el instagram
        </h2>
        {/* <img src={img} className="w-64" /> */}
        <div className="text-left">{caption}</div>
        <a
          href={url}
          className="inline my-10 p-4 border border-1 border-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Seguir Leyendo
        </a>
      </div>
    </div>
  )
}

export default LastinstaPost
