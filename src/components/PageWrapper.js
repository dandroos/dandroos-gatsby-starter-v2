import { Box, Toolbar } from "@mui/material"
import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Seo from "./seo"

const PageWrapper = ({ seo, children, disableToolbar }) => {
  return (
    <>
      <Seo {...seo} />
      <Box component="header">
        <Header />
      </Box>
      <Box component="main">
        {!disableToolbar && <Toolbar />}
        <>{children}</>
      </Box>
      <Box component="footer">
        <Footer />
      </Box>
    </>
  )
}

export default PageWrapper
