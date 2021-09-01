import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  CHANGE_INPUT,
  CLEAR_INPUT,
  // GET_ACTIVE_TASKS,
  // GET_DONE_TASKS,
} from '../actions/actionsType'

export const getTasks = () => {
  return {
    type: GET_TASKS,
    payload: null,
  }
}

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  }
}

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  }
}
export const completeTask = (id) => {
  return {
    type: COMPLETE_TASK,
    payload: id,
  }
}
// export const getActiveTasks = (id) => {
//   return {
//     type: GET_ACTIVE_TASKS,
//     payload: id,
//   }
// }
// export const getDoneTasks = (task) => {
//   return {
//     type: GET_DONE_TASKS,
//     payload: task,
//   }
// }
export const changeInput = (e) => {
  return {
    type: CHANGE_INPUT,
    payload: e,
  }
}
export const clearInput = () => {
  return {
    type: CLEAR_INPUT,
    payload: '',
  }
}
