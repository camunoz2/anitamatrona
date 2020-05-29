import React from "react"
import ServiceCard from "../components/service-card"

const Services = () => {
  return (
    <div>
      <h2 className="text-center font-black text-gradient text-4xl md:text-6xl mt-64 mb-32">
        Algunos de mis servicios
      </h2>
      <div className="flex flex-wrap justify-around">
        <div className="transform rotate-12 mb-10">
          <ServiceCard
            title="Atencion a domicilio"
            body="Visita por 1 hora donde trato de dar solución a tus problemas post parto, $30.000"
            img="https://source.unsplash.com/400x250/?mother"
          />
        </div>
        <div className="transform rotate-5">
          <ServiceCard
            title="Consulta online!"
            body="Consulta por medio online en facebook, zoom o lo que te acomode más. $10.000"
            img="https://source.unsplash.com/400x250/?home"
          />
        </div>
      </div>
    </div>
  )
}

export default Services
