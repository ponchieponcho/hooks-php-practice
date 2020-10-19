/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Node } from '../node/Node'

export const NodeList = (props) => {
  const { nodes, dispatch } = props
  const topLevel = nodes ? nodes.filter(node => node.parent === null) : {}
  return nodes ? (topLevel.map(
    node => <Node {...node} nodes={nodes} dispatch={dispatch} key={node.id} />,
  )) : null
}

NodeList.defaultProp = {
  nodes: {},
}

NodeList.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.object),
}

export default NodeList
