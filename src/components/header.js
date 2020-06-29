import React from "react"
import bg from "../assets/bg.png"

const Header = ({ title, showImage }) => {
  return (
    <div className="flex flex-col items-center p-16">
      <img
        className={`${showImage ? "" : "hidden"}`}
        src={bg}
        alt="matrona anita ana maria barrientos"
      />
      <h2 className="text-6xl font-black text-gradient -m-16">
        {title ? title : "holasss!"}
      </h2>
    </div>
  )
}

export default Header
