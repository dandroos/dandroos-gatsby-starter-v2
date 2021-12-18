import { Box, Container, Typography } from "@mui/material"
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PageWrapper from "../components/PageWrapper"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const { title, description } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `).site.siteMetadata
  return (
    <PageWrapper seo={{ title: "Home" }} disableToolbar>
      <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <Container sx={{ textAlign: "center" }}>
          <StaticImage src="../images/gatsby-icon.png" width={200} />
          <Typography
            variant="h2"
            variantMapping={{ h2: "h1" }}
            align="center"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography variant="lead">{description}</Typography>
        </Container>
      </Box>
    </PageWrapper>
  )
}
export default IndexPage
