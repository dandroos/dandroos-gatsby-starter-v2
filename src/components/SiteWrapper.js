import PropTypes from "prop-types"

const SiteWrapper = ({ children }) => {
  return children
}

SiteWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteWrapper
