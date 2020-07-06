import React from "react"

import anita from "../assets/anita_sq.jpg"

const PriceBox = ({
  iconText,
  title,
  body,
  name,
  date,
  img,
  btnText,
  btnLink,
}) => {
  const bgStyle = {
    backgroundImage: `url(${img})`,
  }

  return (
    <div className="w-full lg:flex my-4">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={bgStyle}
        title="taller 1"
      ></div>
      <div className="w-full border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-grey-dark flex items-center">
            <svg
              className="text-grey w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
            </svg>
            {iconText}
          </p>
          <div className="text-black font-bold text-xl mb-2">{title}</div>
          <p className="text-grey-darker text-base">{body}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex">
            <img
              className="w-10 h-10 rounded-full mr-4 mb-4 md:mb-0"
              src={anita}
              alt="Avatar de Anita Barrientos"
            />
            <div className="text-sm">
              <p className="text-black leading-none">{name}</p>
              <p className="text-grey-dark">{date}</p>
            </div>
          </div>
          <a
            className="bg-blue-500 hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded"
            href={btnLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {btnText}
          </a>
        </div>
      </div>
    </div>
  )
}

export default PriceBox
