import React, { useEffect, useReducer } from 'react'
import { NodeList } from '../nodeList/NodeList'
import { reducer } from '../../reducer'
import { ACTIONS } from '../../actions'

export const MainView = () => {
  const [state, dispatch] = useReducer(reducer, {})
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:8000/webservice.php')
        const json = await res.json()
        dispatch({ type: ACTIONS.INIT_SUCCESS, payload: json })
      }
      catch (err) {
        console.error('err', err)
      }
    }
    fetchData()
  }, [])

  return (
    <React.Fragment>
      <NodeList nodes={state.nodes} dispatch={dispatch} />
    </React.Fragment>
  )
}

export default MainView
