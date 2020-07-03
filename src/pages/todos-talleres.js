import React from "react"
import Layout from "../components/layout"
import PriceBox from "../components/price-box"

import img01 from "../assets/pic_foot_baby.jpg"
import img02 from "../assets/pic_baby_up.jpg"

const TodosTalleres = () => {
  return (
    <Layout headerTitle="Los talleres que podemos desarrollar durante el año">
      <div className="text-md md:text-xl w-3/4 mx-auto font-light">
        <h2 className="mb-4">
          Y la maternidad, la crianza, el gestar y parir, no son, ¿acaso
          procesos propios de la naturaleza de la mujer?{" "}
          <span className="font-bold">
            ¿Debemos o necesitamos entonces, prepararnos para ellos?
          </span>
        </h2>

        <p className="mb-4">
          La respuesta es amplia, por un lado es muy cierto que son procesos
          naturales, propios de cualquier mamífera, que ni siquiera debiesen ser
          cuestionados desde poder o no lograrlos, pero por otro lado hemos
          pasado varias décadas de nuestra existencia humana separándonos del
          poder de los animales, creyéndonos superiores y distintos, además
          medicalizando y patologizando cada uno de nuestros procesos, de la
          mano siempre del crecimiento exponencial de las economías propias de
          cada época, el capitalismo, además de la racionalización y
          enfriamiento de situaciones y vivencias que naturalmente son amorosas,
          calientitas, cercanas y muy acompañadas. Gracias a estas situaciones
          es que hoy se nos olvidó parir, no sabemos cuando estamos enfermas o
          no, desconocemos nuestras capacidades biológicas para gestar, parir,
          amantar y criar.
        </p>

        <p className="mb-4">
          ¡Es por esto que la respuesta a la última pregunta es SI! Claro que
          necesitamos prepararnos, lo necesitamos para recordar que hay un todo
          que nos sostiene, para recordar que soy parte de la naturaleza, para
          reconocerme mamífera, para confiar en mi cuerpo, en mis ancestras que
          ya hicieron mucho antes que yo este trabajo, y para confiar hoy en las
          personas que serán mis acompañantes.
        </p>

        <img className="w-full object-cover" src={img01} alt="baby foots" />

        <h2 className="font-bold text-2xl my-10">
          Taller de Preparación al Post- Parto
        </h2>

        <h3 className="mb-4 text italic">¿Sabes que es el puerperio?</h3>

        <p className="mb-4">
          El puerperio es el periodo de tiempo que pasa desde que tu guagua
          llega a tus brazos hasta (un determinado tiempo muy relativo para cada
          mujer) otro tiempo en que ya nos sentimos más individuales y no
          necesariamente en una diada, generalmente tiene relación con la
          duración de la lactancia y la relativa “independencia” de nuestra
          cría.
        </p>

        <p className="mb-4">
          En este taller entenderemos el concepto de puerperio, desde un sentido
          más profundo e integral, en donde conversaremos de experiencias
          propias y familiares, comentaremos los miedos y expectativas a vivir
          posterior a este nacimiento tanto de mi hij@, como mi propio
          nacimiento que me instala en este mundo como una mujer nueva y
          diferente.
        </p>
        <p className="mb-4">
          En términos más concretos nos enfocaremos en los siguientes temas:
        </p>

        <ul className="mb-4 grid grid-cols-1 gap-4 list-decimal">
          <li className="pl-4">
            Situaciones importantes en el parto para vivir un puerperio sano e
            iniciar una lactancia materna exitosa (hablaremos de la fisiología
            del parto y como es de necesaria esta naturaleza para iniciar la
            crianza)
          </li>

          <li className="pl-4">
            Comportamiento del recién nacido durante los primeros días
          </li>
          <li className="pl-4">Cuidados de la Madre</li>
          <li className="pl-4">Cuidados del Recién Nacido</li>
          <li className="pl-4">Colecho</li>
          <li className="pl-4">
            Alimentación del Recién Nacido, lactancia materna
          </li>
          <li className="pl-4">Sexualidad en el puerperio</li>
          <li className="pl-4">Relación de pareja</li>
        </ul>

        <PriceBox
          title="Preparacion al Post Parto"
          body="Reserva tu cupo para ralizar este taller, recordar que la modalidad del taller es Online y el valor es de $15.000 por pareja y dura 3 hrs"
          name="Ana Maria Barrientos"
          date="24 de Marzo 2020"
          img={img01}
          iconText="Hablemos por Whatsapp"
          btnText="Inscribirse"
          btnLink={"https://api.whatsapp.com/send?phone=56992391139"}
        />

        <img className="w-full object-cover" src={img02} alt="baby foots" />

        <h3 className="font-bold text-2xl my-10">
          Taller de Preparación al Parto
        </h3>

        <p className="mb-4">
          El taller de preparación al post parto está pensado en padres que
          quieren recibir a su hij@ con un conocimiento base que les permita
          desenvolverse de forma satisfactoria y cómoda permitiendo el disfrute
          de esta etapa tan bonita.
        </p>

        <p className="mb-4">
          Este taller ya dio resultado, estoy feliz por eso. Se preparó para las
          circunstancias actuales y tiene mucha dedicación puesta en cada uno de
          los temas a tratar. Con mucho entusiasmo te invito a prepararte.
        </p>

        <p className="mb-4">
          El sólo hecho de prepararse para el parto, disminuye la ansiedad,
          inseguridad, disminuye los riesgos de intervenciones innecesarias (tu
          ya sabrás reconocerlos). Te permitirá incluso disminuir la intensidad
          del dolor al reconocer en tu cuerpo un proceso natural y con ello
          disminuir el miedo a lo desconocido.
        </p>

        <p className="mb-4">Los temas a tratar son:</p>

        <ul className="mb-4 grid grid-cols-1 gap-4 list-decimal">
          <li className="pl-4">Gestación.</li>
          <li className="pl-4">Trabajo de parto (etapas y fisiología).</li>
          <li className="pl-4">Pelvis</li>
          <li className="pl-4">
            Recomendaciones OMS, realidad local y actual por COVID-19.
          </li>
          <li className="pl-4">Cuando consultar.</li>
          <li className="pl-4">
            Manejo del dolor en el trabajo de parto y parto. (Herramientas)
          </li>
          <li className="pl-4">Plan de parto.</li>
          <li className="pl-4">Rol del acompañante.</li>
          <li className="pl-4">Que es parto natural.</li>
          <li className="pl-4">Biografía recomendada.</li>
          <li className="pl-4">Vínculo madre e hij@</li>
        </ul>

        <PriceBox
          title="Preparacion al Post Parto"
          body="Reserva tu cupo para ralizar este taller, recordar que la modalidad del taller es Online y el valor es de $15.000 por pareja y dura 3 hrs"
          name="Ana Maria Barrientos"
          date="24 de Marzo 2020"
          img={img02}
          iconText="Hablemos por Whatsapp"
          btnText="Inscribirse"
          btnLink={"https://api.whatsapp.com/send?phone=56992391139"}
        />
      </div>
    </Layout>
  )
}
export default TodosTalleres
