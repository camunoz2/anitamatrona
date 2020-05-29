import React from "react"
import WorkshopDate from "./workshop-date"
import WorkshopStatus from "./workshop-status"
import workshopImg from "../assets/workshop_bg.png"

const Workshops = () => {
  return (
    <>
      <h2 className="text-4xl font-thin text-purple-700 text-center my-10">
        Los <span className="font-extrabold">talleres</span> que estoy
        realizando durante <span className="font-extrabold">todo el año!</span>{" "}
        😍
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-12 my-16 grid-flow-row">
        <img
          src={workshopImg}
          alt="talleres"
          className="hidden md:block md:col-span-6 pr-4"
        />
        <div className="grid grid-rows-4 gap-2 col-span-2 md:col-span-3">
          <WorkshopDate />
          <WorkshopDate />
          <WorkshopDate />
          <WorkshopDate />
        </div>
        <div className="grid grid-rows-4 gap-2 col-span-2 md:col-span-3">
          <WorkshopStatus />
          <WorkshopStatus />
          <WorkshopStatus />
          <WorkshopStatus />
        </div>
      </div>
    </>
  )
}

export default Workshops
