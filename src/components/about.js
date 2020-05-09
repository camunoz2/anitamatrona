import React from "react"
import aboutImg from "../assets/about_bg.png"

const About = () => {
  return (
    <div className="flex items-center my-64">
      <div className="text-gradient font-black text-5xl w-1/2 z-10">
        En esta página encontraras material interesante con respecto a la salud
        de la mujer, sus proceso y cambios a lo largo de su ciclo vital.
      </div>
      <img className="absolute z-0" src={aboutImg} />
    </div>
  )
}

export default About
