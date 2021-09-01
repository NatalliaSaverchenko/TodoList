import { combineReducers } from 'redux'
import tasksReducers from './tasksReducers'

const rootReducer = combineReducers({
  tasks: tasksReducers,
})
export default rootReducer
