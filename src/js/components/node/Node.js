/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Caret } from '../caret/Caret'
import { ACTIONS } from '../../actions'

const renderChild = (currentNodeId, nodes) => nodes.find(node => node.parent === currentNodeId)
const isEmpty = obj => obj && !(Object.keys(obj).length === 0)
const buildClassName = (parent, hasChild) => {
  let name = 'node'
  if (parent !== null) {
    name += ' child'
  }
  if (hasChild) {
    name += ' pointer'
  }
  return name
}
export const Node = (props) => {
  const {
    id, collapsed, name, thumbnail, dispatch, nodes, parent,
  } = props
  const childNode = renderChild(id, nodes)
  const hasChild = isEmpty(childNode)
  return (
    <React.Fragment>
      <div className={buildClassName(parent, hasChild)} onClick={() => dispatch({ type: ACTIONS.NODE_CLICKED, payload: { id } })} onKeyPress={() => console.log('clicked')} role="button" tabIndex="0">
        <img src={thumbnail.href} alt={thumbnail.description} />
        {name}
        { hasChild && <Caret collapsed={collapsed} /> }
      </div>
      {childNode && collapsed
        ? <Node {...childNode} nodes={nodes} dispatch={dispatch} key={childNode.id} /> : null}
    </React.Fragment>
  )
}

Node.defaultProps = {
  collapsed: null,
  parent: null,
}
Node.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.objectOf(PropTypes.string).isRequired,
  collapsed: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
  parent: PropTypes.number,
}

export default Node
