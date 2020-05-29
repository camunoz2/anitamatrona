import React from "react"

const LastinstaPost = ({ img, caption }) => {
  console.log(img)
  return (
    <div className="w-full custom-gradient text-left py-10">
      <div className="container mx-auto flex flex-col p-2 md:p-32 text-gray-100 text-xl">
        <h2 className="text-md  mb-4 text-center md:text-left md:text-6xl font-black text-gradient z-10">
          Reflexiones desde el instagram
        </h2>
        {/* <img src={img} className="w-64" /> */}
        <div className="text-left">{caption}</div>
      </div>
    </div>
  )
}

export default LastinstaPost
