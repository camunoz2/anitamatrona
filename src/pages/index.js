import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import About from "../components/about"
import Services from "../components/services"
import Workshops from "../components/workshops"
import LastInstaPost from "../components/lastinsta-post"
import GoUp from "../components/go-up"
import Footer from "../components/footer.js"

const Index = () => {
  const gatsbyInstaPostData = useStaticQuery(graphql`
    {
      post {
        dataQuery {
          caption
          media_url
        }
      }
    }
  `)

  const lastPostCaption = gatsbyInstaPostData.post.dataQuery[0].caption
  const lastPostImg = gatsbyInstaPostData.post.dataQuery[0].media_url

  return (
    <>
      <Layout showImage={true} headerTitle="hola!">
        <About />
        <Services />
        <Workshops />
      </Layout>
      <LastInstaPost img={lastPostImg} caption={lastPostCaption} />
      <div className="container mx-auto">
        <GoUp />
      </div>
      <Footer />
    </>
  )
}

export default Index
