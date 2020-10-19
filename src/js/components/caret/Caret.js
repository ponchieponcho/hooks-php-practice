import React from 'react'
import PropTypes from 'prop-types'

export const Caret = (props) => {
  const { collapsed } = props
  return collapsed ? <i className="fas fa-caret-down" /> : <i className="fas fa-caret-right" />
}

Caret.defaultProps = {
  collapsed: null,
}
Caret.propTypes = {
  collapsed: PropTypes.bool,
}

export default Caret
