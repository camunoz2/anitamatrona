import React from "react"
import Layout from "../components/layout"
import ServiceCard from "../components/service-card"

import imgService01 from "../assets/_services/1-acompanamiento-al-parto.jpg"
import imgService02 from "../assets/_services/2-visitas-domicilio.jpg"
import imgService03 from "../assets/_services/3-control-de-puerpera-y-recien-nacido.jpg"
import imgService04 from "../assets/_services/4-consulta-de-lactancia-materna.jpg"
import imgService05 from "../assets/_services/5-consulta-ginecologica.jpg"
import imgService06 from "../assets/_services/6-consulta-infeccion-transmision-sexual.jpg"
import imgService07 from "../assets/_services/7-examen-fisico-de-mamas.jpg"
import imgService08 from "../assets/_services/8-toma-de-pap.jpg"
import imgService09 from "../assets/_services/9-control-ginecologico.jpg"
import imgService10 from "../assets/_services/10-control-pre-natal.jpg"
import imgService11 from "../assets/_services/11-control-pre-concepcional.jpg"

const Servicios = () => {
  return (
    <Layout showImage={true} headerTitle="servicios!">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <ServiceCard
          title="Acompañamiento al parto"
          body="Acompañamiento al parto en casa y en clínica"
          img={imgService01}
        />

        <ServiceCard
          title="Visitas a domicilio"
          body="Control prenatal
          Consulta prenatal de urgencia
          Consulta de lactancia materna
          Clínica de lactancia materna"
          img={imgService02}
        />
        <ServiceCard
          title="Control de puérpera y recién nacido"
          body="Primer control de la puérpera y recién nacido post parto.
          Control de salud completo de la madre, examen físico, examen ginecológico, evaluación de la condición psicológica, examen de mamas.
          Control del recien nacido, según edad, peso, baja de peso fisiológica, acople,alimentación, evaluación física, reflejos.
          Educación a la madre en cuidados del puerperio, maternidad y lactancia materna, alimentación materna. Entre otras acciones"
          img={imgService03}
        />
        <ServiceCard
          title="Consulta de lactancia materna"
          body="lasda akdjasdkad kajd asd askdj"
          img={imgService04}
        />
        <ServiceCard
          title="Consulta ginecológica"
          body="lasda akdjasdkad kajd asd askdj"
          img={imgService05}
        />
        <ServiceCard
          title="Consulta de infección de transmisión sexual"
          body="lasda akdjasdkad kajd asd askdj"
          img={imgService06}
        />
        <ServiceCard
          title="Exámen físico de mamas"
          body="lasda akdjasdkad kajd asd askdj"
          img={imgService07}
        />
        <ServiceCard
          title="Toma de Pap"
          body="lasda akdjasdkad kajd asd askdj"
          img={imgService08}
        />
        <ServiceCard
          title="Control ginecológico"
          body="lasda akdjasdkad kajd asd askdj"
          img={imgService09}
        />
        <ServiceCard
          title="Control pre-natal"
          body="lasda akdjasdkad kajd asd askdj"
          img={imgService10}
        />
        <ServiceCard
          title="Control pre-concepcional"
          body="lasda akdjasdkad kajd asd askdj"
          img={imgService11}
        />
      </div>
    </Layout>
  )
}

export default Servicios
