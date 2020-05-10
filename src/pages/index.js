import React from "react"

import Layout from "../components/layout"
import Subscribe from "../components/subscribe"
import Promotext from "../components/promotext"
import bg from "../assets/bg.jpg"

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col px-2 md:px-40">
        <div className="mt-10">
          <h2 className="font-black text-3xl text-gray-600">
            Taller de Preparación al Post- Parto
          </h2>
          <div className="font-black text-xl mb-4">
            ¿Sabes que es el puerperio?
          </div>
        </div>
        <img
          src={bg}
          className="w-half"
          alt="matrona anita ana maria barrientos"
        />
        <Subscribe />
        <Promotext />
      </div>
    </Layout>
  )
}

export default Index
