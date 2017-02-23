import {
  createStore,
  combineReducers,
} from 'redux'
import * as Reducers from './Reducers'

const AllReducers = combineReducers({
  app: Reducers.AppReducer,
  forms: Reducers.FormsReducer,
})

const Store = createStore(AllReducers)

export default Store
