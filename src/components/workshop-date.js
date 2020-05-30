import React from "react"

const WorkshopDate = () => {
  return (
    <div className="flex">
      <div className="flex flex-col items-end justify-center py-2 mr-4">
        <div>
          <h2 className="font-extrabold text-md lg:text-3xl leading-none text-gray-700 text-right">
            21 de Marzo
          </h2>
          <p className="font-light text-sm text-gray-700 text-right">
            Taller de preparacion al parto
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-start">
        <p className="text-center font-extrabold text-white text-3xl px-4 py-2 bg-green-500">
          Listo
        </p>
      </div>
    </div>
  )
}

export default WorkshopDate
