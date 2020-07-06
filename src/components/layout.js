import React from "react"

import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "./navbar"
import GoUp from "./go-up"
import Footer from "./footer"

const Layout = ({ children, headerTitle, showImage }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          baseUrl
          title
          description
          image
        }
      }
    }
  `)

  const metadata = data.site.siteMetadata

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

      <div className="container mx-auto px-4">
        <Navbar />
        <Header title={headerTitle} showImage={showImage} />
        {children}
      </div>
      <GoUp />
      <Footer />
    </>
  )
}

export default Layout
