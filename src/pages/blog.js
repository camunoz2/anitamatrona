import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import logo from "../assets/logo.png"
import bg from "../assets/bg.png"
import BlogPost from "../components/blog-post"

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
  const pageQuery = gatsbyInstaPostData.paging.dataQuery.next

  const fetchNextPost = async () => {
    const postNextData = await fetch(pageQuery).then(data => data.json())
    console.log(postNextData)
    return postNextData
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mt-4">
        <img src={logo} alt="logo" className="w-24" />
        <button className="px-2 py-1 rounded shadow-xl custom-gradient text-white font-hairline text-2xl">
          Contacto
        </button>
      </div>

      <div className="flex flex-col items-center p-16">
        <img src={bg} alt="matrona anita ana maria barrientos" />
        <h2
          className="text-6xl font-black -m-16"
          style={{ textShadow: "0px -3px 0px #FFFFFF" }}
        >
          hola!
        </h2>
      </div>

      <div className="mt-4">
        <h1 className="text-4xl stroke-current gradient-outline font-bold tracking-wider">
          Entradas del Blog
        </h1>
      </div>

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
      <div></div>

      <button className="hidden" onClick={fetchNextPost}>
        Next
      </button>
    </div>
  )
}

export default Blog
