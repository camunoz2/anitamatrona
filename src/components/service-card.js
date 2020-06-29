import React from "react"

const ServiceCard = ({ title, body, img }) => {
  return (
    <div className="flex flex-col w-full items-stretch shadow-xl">
      <img src={img} alt="atencion a domicilio" />
      <div className="custom-gradient px-2 pb-2 flex-1">
        <h3 className="text-white font-bold my-4">{title}</h3>
        <p className="text-white font-hairline">{body}</p>
      </div>
    </div>
  )
}

export default ServiceCard
