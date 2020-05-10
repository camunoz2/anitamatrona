import React from "react"
import imageBaby from "../assets/bg2.jpg"

const Promotext = () => {
  return (
    <>
      <p className="text-xl">
        El puerperio es el periodo de tiempo que pasa desde que tu guagua llega
        a tus brazos hasta (un determinado tiempo muy relativo para cada mujer)
        otro tiempo en que ya nos sentimos más individuales y no necesariamente
        en una diada, generalmente tiene relación con la duración de la
        lactancia y la relativa “independencia” de nuestra cría.
      </p>
      <p className="text-xl mt-10">
        En este taller entenderemos el concepto de puerperio, desde un sentido
        más profundo e integral, en donde conversaremos de experiencias propias
        y familiares, comentaremos los miedos y expectativas a vivir posterior a
        este nacimiento tanto de mi hij@, como mi propio nacimiento que me
        instala en este mundo como una mujer nueva y diferente. En términos más
        concretos nos enfocaremos en los siguientes temas
      </p>

      <div className="mt-10">
        <ul className="text-xl">
          <li className="pb-2 p-4 border border-1 border-gray-400 rounded bg-white shadow">
            Situaciones importantes en el parto para vivir un puerperio sano e
            iniciar una lactancia materna exitosa (hablaremos de la fisiología
            del parto y como es de necesaria esta naturaleza para iniciar la
            crianza)
          </li>
          <li className="pb-2 p-4 border border-1 border-gray-400 rounded bg-white shadow mt-5">
            Comportamiento del recién nacido durante los primeros días
          </li>
          <li className="pb-2 p-4 border border-1 border-gray-400 rounded bg-white shadow mt-5">
            Cuidados de la Madre
          </li>
          <li className="pb-2 p-4 border border-1 border-gray-400 rounded bg-white shadow mt-5">
            Cuidados del Recién Nacido
          </li>
          <li className="pb-2 p-4 border border-1 border-gray-400 rounded bg-white shadow mt-5">
            Colecho
          </li>
          <li className="pb-2 p-4 border border-1 border-gray-400 rounded bg-white shadow mt-5">
            Alimentación del Recién Nacido, lactancia materna
          </li>
          <li className="pb-2 p-4 border border-1 border-gray-400 rounded bg-white shadow mt-5">
            Sexualidad en el puerperio
          </li>
          <li className="pb-2 p-4 border border-1 border-gray-400 rounded bg-white shadow mt-5">
            Relación de pareja
          </li>
        </ul>
      </div>

      <div className="mt-10 custom-gradient p-4 text-white text-xl">
        <h3>
          <span className="font-bold">Fecha del taller:</span> Sábado 16 de mayo
          de 2020
        </h3>
        <h3 className="font-bold">Horario</h3>
        <p>
          <span className="font-bold">Grupo 1:</span> 11 Horas
        </p>
        <p>
          <span className="font-bold">Grupo 2:</span> 18 Horas{" "}
        </p>
        <p>
          <span className="font-bold">Duración:</span> 2 horas aproximadas
        </p>
        <p>
          <span className="font-bold">Materiales:</span> Cuaderno para tomar
          apuntes y un lápiz a tu elección.
        </p>
      </div>
    </>
  )
}

export default Promotext
