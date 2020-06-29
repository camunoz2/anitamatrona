import React from "react"
import { ScrollTo } from "react-scroll-to"

const GoUp = () => {
  return (
    <div className="p-4 md:py-10 flex flex-col justify-center items-center">
      <ScrollTo>
        {({ scroll }) => (
          <button
            onClick={() => scroll({ y: 0, smooth: true })}
            className="text-xl md:text-2xl text-purple-700 font-extrabold border-4 md:border-8 border-purple-700 py-5 px-10 rounded-full"
          >
            SUBIR
          </button>
        )}
      </ScrollTo>
    </div>
  )
}

export default GoUp
