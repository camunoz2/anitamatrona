import React from "react"
import workshopImg from "../assets/workshop_bg.png"
import WorkshopDate from "./workshop-date"

const Workshops = () => {
  return (
    <div className="my-10">
      <h2 className="text-4xl font-thin text-purple-700 text-center my-10">
        Los <span className="font-extrabold">talleres</span> que estoy
        realizando durante <span className="font-extrabold">todo el año!</span>{" "}
        😍
      </h2>
      <div className="flex justify-center">
        <img
          src={workshopImg}
          alt="talleres"
          className="hidden md:block md:col-span-6 pr-4 h-64"
        />

        <div className="flex flex-col h-64">
          <WorkshopDate />
          <WorkshopDate />
          <WorkshopDate />
          <WorkshopDate />
        </div>
      </div>
    </div>
  )
}

export default Workshops
