import React from "react"
import ServiceCard from "../components/service-card"

import imgService01 from "../assets/_services/1-acompanamiento-al-parto.jpg"
import imgService02 from "../assets/_services/2-visitas-domicilio.jpg"

const Services = () => {
  return (
    <div>
      <h2 className="text-center font-black text-gradient text-4xl md:text-6xl mt-64 mb-32">
        Algunos de mis servicios
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <ServiceCard
          title="Acompañamiento al parto"
          body="Acompañamiento al parto en casa y en clínica"
          img={imgService01}
        />

        <ServiceCard
          title="Visitas a domicilio"
          body="Control prenatal
          Consulta prenatal de urgencia
          Consulta de lactancia materna
          Clínica de lactancia materna"
          img={imgService02}
        />
      </div>
    </div>
  )
}

export default Services
