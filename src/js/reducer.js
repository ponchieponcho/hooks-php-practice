import { ACTIONS } from './actions'

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INIT_SUCCESS: {
      return { nodes: action.payload.nodes, settings: action.payload.settings }
    }

    case ACTIONS.NODE_CLICKED: {
      // TODO: Update json file via php server
      // try {
      //   postData('http://localhost:8000/webservice.php', { ...state })
      //     .then((data) => {
      //       console.log(data)
      //     })
      // }
      // catch (err) {
      //   console.error('err', err)
      // }
      return {
        ...state,
        nodes: state.nodes.map((node) => {
          if (node.id !== action.payload.id) {
            return node
          }

          return { ...node, collapsed: !node.collapsed }
        }),
      }
    }

    default:
      return state
  }
}

export default reducer
