import React from "react"

const WorkshopDate = ({ date, name, workshopStatus }) => {
  return (
    <div className="grid grid-cols-2 gap-1 border">
      <div className="flex flex-col justify-center p-4">
        <h2 className="font-extrabold text-md lg:text-3xl leading-none text-gray-700">
          {date}
        </h2>
        <p className="font-light text-sm text-gray-700">{name}</p>
      </div>
      <p className="flex items-center justify-center font-extrabold text-white text-3xl bg-green-500">
        {workshopStatus}
      </p>
    </div>
  )
}

export default WorkshopDate
