import React from "react"
import Layout from "../components/layout"
import image from "../assets/anita.jpg"

const SobreMi = () => {
  return (
    <Layout showImage={false} headerTitle="sobre mi!">
      <div className="overflow-hidden w-1/2 mx-auto">
        <img src={image} alt="sobre mi" />
      </div>
      <div>asd</div>
    </Layout>
  )
}

export default SobreMi
