import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import root_reducer from '../reducers'

const compose_enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [ thunk ]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

export default function configureStore() {
  return createStore(
    root_reducer,
    compose_enhancer(
      applyMiddleware(...middleware)
    )

  )
}
// window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
