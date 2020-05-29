import React from "react"

const WorkshopStatus = () => {
  const customGreen = "#41EA26"

  return (
    <div className="flex items-center justify-center md:justify-start">
      <p
        style={{ backgroundColor: `${customGreen}` }}
        className="text-center font-extrabold text-white text-3xl px-4 py-2"
      >
        Listo
      </p>
    </div>
  )
}

export default WorkshopStatus
