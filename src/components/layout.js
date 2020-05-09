import React from "react"
import Header from "./header"
import Navbar from "./navbar"

const Layout = ({ children, headerTitle }) => {
  return (
    <div className="container mx-auto px-4">
      {/* <Navbar /> */}
      <Header title={headerTitle} />
      {children}
    </div>
  )
}

export default Layout
