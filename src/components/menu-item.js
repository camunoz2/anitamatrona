import React from "react"
import { Link } from "gatsby"

const MenuItem = ({ text, linkTo }) => {
  return (
    <div className="mx-3 px-3 py-2 hover:bg-green-200">
      <Link to={linkTo}>{text}</Link>
    </div>
  )
}

export default MenuItem
