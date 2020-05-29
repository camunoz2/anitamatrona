import React from "react"
import bg from "../assets/bg.png"
import LineSVG from "../components/svgs/lineSVG"

const Header = ({ title, showImage }) => {
  return (
    <div className="flex flex-col items-center p-16">
      <div className="absolute -ml-64">
        <LineSVG />
      </div>
      <div className="absolute -ml-32">
        <LineSVG />
      </div>
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
