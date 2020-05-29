import React from "react"
import { ScrollTo } from "react-scroll-to"

const GoUp = () => {
  return (
    <div className="p-4 md:py-10 flex flex-col justify-center items-center">
      <p className="my-10 text-xl md:text-3xl font-thin text-center">
        Pusimos este boton aca para que no tengas que hacer scroll con tu mouse,
        ya tienes que hacer demasiado en esta vida!!
      </p>
      <ScrollTo>
        {({ scroll }) => (
          <button
            onClick={() => scroll({ y: 0, smooth: true })}
            className="text-xl md:text-5xl text-purple-700 font-extrabold border-4 md:border-8 border-purple-700 py-5 px-10 rounded-full"
          >
            SUBIR
          </button>
        )}
      </ScrollTo>
    </div>
  )
}

export default GoUp
