import {createStore,applyMiddleware} from 'redux'
import Thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducers'

const store = createStore(reducer,composeWithDevTools(applyMiddleware(Thunk)))

export default store