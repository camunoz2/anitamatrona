import React from "react"
import aboutImg from "../assets/about_bg.jpg"

const About = () => {
  return (
    <div className="flex items-center my-64">
      <div className="text-purple-800 text-2xl text-center font-bold md:text-5xl md:text-left md:w-3/4 z-10">
        <span className="bg-green-300">
          En esta página encontraras material interesante con respecto a mi
          trabajo, la salud de la mujer, sus proceso y cambios a lo largo de su
          ciclo vital.
        </span>
      </div>
      <img className="absolute z-0" src={aboutImg} alt="sobre mi" />
    </div>
  )
}

export default About
