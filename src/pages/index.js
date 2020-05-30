import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import About from "../components/about"
import Services from "../components/services"
import Workshops from "../components/workshops"
import LastInstaPost from "../components/lastinsta-post"

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
        <LastInstaPost img={lastPostImg} caption={lastPostCaption} />
      </Layout>
    </>
  )
}

export default Index
