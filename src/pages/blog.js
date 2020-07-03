import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import PriceBox from "../components/price-box"

const Blog = () => {
  const gatsbyInstaPostData = useStaticQuery(graphql`
    query {
      post {
        dataQuery {
          caption
          media_url
          id
          permalink
          thumbnail_url
          media_type
          timestamp(formatString: "DD MMMM YYYY", locale: "es-CL")
        }
      }
    }
  `)
  const postQuery = gatsbyInstaPostData.post.dataQuery

  const truncate = elem => {
    if (!elem) return
    else {
      const titleArray = elem.split(" ")
      const title = `${titleArray[0]} ${titleArray[1]}`
      return title
    }
  }

  return (
    <Layout headerTitle="Desde instagram">
      <div className="flex flex-col justify-around">
        {postQuery.map(post => {
          return (
            <PriceBox
              key={post.id}
              name="Ana María Barrientos"
              date={post.timestamp}
              title={truncate(post.caption)}
              btnText="Leer mas"
              iconText={post.permalink}
              img={
                post.media_type === "VIDEO"
                  ? post.thumbnail_url
                  : post.media_url
              }
              btnLink={post.permalink}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog
