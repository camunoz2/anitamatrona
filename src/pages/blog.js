import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlogPost from "../components/blog-post"
import Layout from "../components/layout"

const Blog = () => {
  const gatsbyInstaPostData = useStaticQuery(graphql`
    query {
      post {
        dataQuery {
          caption
          media_url
          id
        }
      }
      paging {
        dataQuery {
          next
          cursors {
            before
            after
          }
        }
      }
    }
  `)
  const postQuery = gatsbyInstaPostData.post.dataQuery

  return (
    <Layout headerTitle="Desde instagram">
      <div>
        {postQuery.map(post => {
          return (
            <BlogPost
              key={post.id}
              image={post.media_url}
              body={post.caption}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog
