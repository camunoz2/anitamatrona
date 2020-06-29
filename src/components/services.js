import React from "react"
import ServiceCard from "../components/service-card"

import imgService01 from "../assets/_services/1-acompanamiento-al-parto.jpg"
import imgService02 from "../assets/_services/12-enlinea.jpg"
import imgService03 from "../assets/_services/3-control-de-puerpera-y-recien-nacido.jpg"

const Services = () => {
  return (
    <div>
      <h2 className="text-center font-black text-gradient text-4xl md:text-6xl mt-64 mb-32">
        Algunos de mis servicios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <ServiceCard
          title="Acompañamiento al parto en casa"
          body="Este servicio tiene como objetivo acompañar, asistir y resguardar la decisión de parir en casa.
          El parto planificado en domicilio, con atención o compañía profesional, es una forma de nacer maravillosa, segura, y probada a nivel mundial.
          Este servicio consiste en acompañar a la mujer y su familia durante el trabajo de parto, parto y puerperio inmediato. Se realizan 3 visitas, una prenatal y 2 post natales a la madre y al recién nacido, se entregan los documentos necesarios y se realiza acompañamiento vía telefónica durante un mes.
          Actualmente además estoy siendo acompañada en los partos por dos doulas de aquí de Chillán por lo que el ambiente tanto físico, como emocional y espiritual, están cubiertos. Dando de esta forma una atención integral a las necesidades de cada familia.
          "
          img={imgService01}
        />

        <ServiceCard
          title="Consulta en Linea"
          body="Debido a la situación en el mundo actualmente, me vi en la obligación de cambiar la forma de atender, de tal forma que me resultara cómodo ser madre y además trabajar y darle el espacio a sus preguntas y necesidades. Entonces plantee como opción la consulta en línea.
          La consulta en línea se realiza a través de Internet por una videollamada de WhatsApp, dura más menos 45 minutos en promedio.
          Las consultas que en general recibo van desde métodos anticonceptivos, orientaciones, prenatales, preconcpepcionales, consejerías, asesorías para el parto en casa, consultas sobre exámenes de transmisión sexual, solicitud de exámenes, consultas de lactancia materna, entre otras.
          "
          img={imgService02}
        />

        <ServiceCard
          title="Consultas a domicilio"
          body="Antes de la situación del Covid-19 ya eran necesarias las consultas a domicilio, hoy más aún, las madres no queremos ponernos en riesgo y tampoco a nuestros hijos, muchas mujeres además tienen a su cuidado hijos pequeños o adultos mayores que les dificulta enormemente la movilización fuera del hogar.
          En este caso el servicio consiste en acudir a la casa de la persona que lo solicita y realizar la atención en ese lugar, ahora ¿Cuáles serían esas atenciones? 
          Control Prental
          Control Puerpera y Recién Nacido
          Control de peso del recién nacido
          Consulta de Lactancia materna
          Clinica de lactancia
          Acompañamiento del trabajo de parto 
          Entre otras."
          img={imgService03}
        />
      </div>
    </div>
  )
}

export default Services
