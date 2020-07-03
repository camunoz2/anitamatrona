import React from "react"
import WorkshopDate from "./workshop-date"

const Workshops = () => {
  return (
    <div className="my-10">
      <h2 className="text-4xl font-thin text-purple-700 text-center my-10">
        Los <span className="font-extrabold">talleres</span> que estoy
        realizando durante{" "}
        <span className="font-extrabold">todo el año! 2020</span>
        😍
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <WorkshopDate
          name="Preparacion al Parto"
          date="22 Feb"
          workshopStatus="Listo"
        />
        <WorkshopDate
          name="Preparación al Parto"
          date="2 May"
          workshopStatus="Listo"
        />
        <WorkshopDate
          name="Preparación al Post-Parto"
          date="16 May"
          workshopStatus="Listo"
        />
        <WorkshopDate
          name="Preparación al Parto"
          date="6 Jun"
          workshopStatus="Listo"
        />
        <WorkshopDate
          name="Preparación al Post-Parto"
          date="13 Jun"
          workshopStatus="Listo"
        />
        <WorkshopDate
          name="Preparación al Post-Parto"
          date="27 Jun"
          workshopStatus="Listo"
        />
        <WorkshopDate
          name="Preparación al Parto"
          date="11 Jul"
          workshopStatus="Se viene!"
        />
      </div>
    </div>
  )
}

export default Workshops
