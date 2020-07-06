import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import About from "../components/about"
import Services from "../components/services"
import Workshops from "../components/workshops"
import LastInstaPost from "../components/lastinsta-post"

import { motion } from "framer-motion"

const Index = () => {
  const gatsbyInstaPostData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          baseUrl
          title
          description
          image
        }
      }
      post {
        dataQuery {
          caption
          media_url
          permalink
        }
      }
    }
  `)

  const lastPostCaption = gatsbyInstaPostData.post.dataQuery[0].caption
  const lastPostImg = gatsbyInstaPostData.post.dataQuery[0].media_url
  const permalink = gatsbyInstaPostData.post.dataQuery[0].permalink
  const metadata = gatsbyInstaPostData.site.siteMetadata

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <link rel="canonical" href={metadata.baseUrl} />
        <meta name="description" content={metadata.description} />
        {metadata.image && <meta name="image" content={metadata.image} />}

        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        {metadata.image && (
          <meta property="og:image" content={metadata.image} />
        )}
      </Helmet>

      <Layout showImage={true} headerTitle="Hola">
        <div className="flex items-center justify-center">
          <motion.svg
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              loop: Infinity,
            }}
            fill="#a842a5"
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
          >
            <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
          </motion.svg>
        </div>
        <About />
        <Services />
        <Workshops />
        <LastInstaPost
          img={lastPostImg}
          caption={lastPostCaption}
          url={permalink}
        />
      </Layout>
    </>
  )
}

export default Index
