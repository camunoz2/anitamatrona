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
      <h2 className="text-5xl font-black text-gradient text-center">
        {title ? title : "holasss!"}
      </h2>
    </div>
  )
}

export default Header
