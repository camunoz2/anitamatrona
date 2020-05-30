import React from "react"
import Header from "./header"
import Navbar from "./navbar"
import GoUp from "./go-up"
import Footer from "./footer"

const Layout = ({ children, headerTitle, showImage }) => {
  return (
    <>
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
