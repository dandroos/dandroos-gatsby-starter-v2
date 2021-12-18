import MuiLink from "@mui/material/Link"
import { Link } from "gatsby"
import * as React from "react"

export const GatsbyLink = React.forwardRef(function GatsbyLink(props, ref) {
  return <MuiLink component={Link} ref={ref} {...props} />
})
