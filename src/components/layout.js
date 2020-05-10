import React from "react"
import Navbar from "./navbar"

const Layout = ({ children, headerTitle }) => {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
