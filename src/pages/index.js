import React from "react"

import Layout from "../components/layout"
import About from "../components/about"

import imageBaby from "../assets/bg2.jpg"

const Index = () => {
  return (
    <Layout headerTitle="hola!">
      <p className="mb-2 p-4 border-1 border border-gray-400 rounded bg-white shadow">
        Y la maternidad, la crianza, el gestar y parir, no son, ¿acaso procesos
        propios de la naturaleza de la mujer? ¿Debemos o necesitamos entonces,
        prepararnos para ellos? La respuesta es amplia, por un lado es muy
        cierto que son procesos naturales, propios de cualquier mamífera, que ni
        siquiera debiesen ser cuestionados desde poder o no lograrlos, pero por
        otro lado hemos pasado varias décadas de nuestra existencia humana
        separándonos del poder de los animales, creyéndonos superiores y
        distintos, además medicalizando y patologizando cada uno de nuestros
        procesos, de la mano siempre del crecimiento exponencial de las
        economías propias de cada época, el capitalismo, además de la
        racionalización y enfriamiento de situaciones y vivencias que
        naturalmente son amorosas, calientitas, cercanas y muy acompañadas.
        Gracias a estas situaciones es que hoy se nos olvidó parir, no sabemos
        cuando estamos enfermas o no, desconocemos nuestras capacidades
        biológicas para gestar, parir, amantar y criar. Es por esto que la
        respuesta a la última pregunta es SI! Claro que necesitamos prepararnos,
        lo necesitamos para recordar que hay un todo que nos sostiene, para
        recordar que soy parte de la naturaleza, para reconocerme mamífera, para
        confiar en mi cuerpo, en mis ancestras que ya hicieron mucho antes que
        yo este trabajo, y para confiar hoy en las personas que serán mis
        acompañantes.
      </p>

      <div className="my-16">
        <h2 className="font-black text-5xl text-gray-600 text-center">
          Taller de Preparación al Post- Parto
        </h2>
        <div className="font-black text-xl mb-4 text-center">
          ¿Sabes que es el puerperio?
        </div>
      </div>
      <p className="mb-2 p-4 border-1 border border-gray-400 rounded bg-white shadow">
        El puerperio es el periodo de tiempo que pasa desde que tu guagua llega
        a tus brazos hasta (un determinado tiempo muy relativo para cada mujer)
        otro tiempo en que ya nos sentimos más individuales y no necesariamente
        en una diada, generalmente tiene relación con la duración de la
        lactancia y la relativa “independencia” de nuestra cría. En este taller
        entenderemos el concepto de puerperio, desde un sentido más profundo e
        integral, en donde conversaremos de experiencias propias y familiares,
        comentaremos los miedos y expectativas a vivir posterior a este
        nacimiento tanto de mi hij@, como mi propio nacimiento que me instala en
        este mundo como una mujer nueva y diferente. En términos más concretos
        nos enfocaremos en los siguientes temas
      </p>

      <div
        className="hidden sm:block w-full"
        style={{
          background: `url(${imageBaby}) center center fixed`,
          height: "550px",
        }}
      ></div>
      <div className="mb-2 p-4 border-1 border border-gray-400 rounded bg-white shadow">
        <ul className="divide-y divide-gray-400">
          <li className="pb-2">
            Situaciones importantes en el parto para vivir un puerperio sano e
            iniciar una lactancia materna exitosa (hablaremos de la fisiología
            del parto y como es de necesaria esta naturaleza para iniciar la
            crianza)
          </li>
          <li className="py-2">
            Comportamiento del recién nacido durante los primeros días
          </li>
          <li className="py-2">Cuidados de la Madre</li>
          <li className="py-2">Cuidados del Recién Nacido</li>
          <li className="py-2">Colecho</li>
          <li className="py-2">
            Alimentación del Recién Nacido, lactancia materna
          </li>
          <li className="py-2">Sexualidad en el puerperio</li>
          <li className="pt-2">Relación de pareja</li>
        </ul>
      </div>

      <div className="mb-2 p-4 border-1 border border-gray-400 rounded bg-white shadow">
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
    </Layout>
  )
}

export default Index
