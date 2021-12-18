import React from "react"
import SiteWrapper from "./src/components/SiteWrapper"

export const wrapPageElement = ({ element, props }) => {
  return <SiteWrapper {...props}> {element}</SiteWrapper>
}
