import React from "react"
import Layout from "../components/layout"
import ServiceCard from "../components/service-card"

const Servicios = () => {
  return (
    <Layout showImage={true} headerTitle="servicios!">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <ServiceCard
          title="Atencion a domicilio"
          body="lasda akdjasdkad kajd asd askdj"
          img="https://source.unsplash.com/400x400/?mother"
        />
        <ServiceCard
          title="Atencion a domicilio"
          body="lasda akdjasdkad kajd asd askdj"
          img="https://source.unsplash.com/400x400/?maternity"
        />
        <ServiceCard
          title="Atencion a domicilio"
          body="lasda akdjasdkad kajd asd askdj"
          img="https://source.unsplash.com/400x400/?baby"
        />
      </div>
    </Layout>
  )
}

export default Servicios
