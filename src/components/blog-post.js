import React from "react"
import PriceBox from "./price-box"

const BlogPost = ({ image, body, postUrl, videoThumbnail, mediaType }) => {
  const truncate = elem => {
    if (!elem) return
    else {
      const titleArray = elem.split(" ")
      const title = `${titleArray[0]} ${titleArray[1]}`
      return title
    }
  }

  return (
    <>
      <PriceBox
        name="Ana María Barrientos"
        title={truncate(body)}
        btnText="Leer mas"
        iconText={postUrl}
        img={mediaType === "VIDEO" ? videoThumbnail : image}
      />
      <div className="border border-1 border-gray-400 rounded p-4 relative my-10 flex hover:bg-green-200">
        <div className="w-24  h-24 border border-1 border-gray-400 rounded-full overflow-hidden absolute -my-5 shadow-xl">
          <img
            src={mediaType === "VIDEO" ? videoThumbnail : image}
            alt="post-img"
          />
        </div>
        <p className="text-4xl font-bold text-right w-full text-purple-600">
          {truncate(body)}...
        </p>
      </div>
    </>
  )
}

export default BlogPost
