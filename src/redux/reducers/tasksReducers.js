import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  CHANGE_INPUT,
  CLEAR_INPUT,
} from '../actions/actionsType'
const initialeState = {
  data: [
    { id: 0, title: 'create app', done: false },
    { id: 1, title: 'create react', done: true },
    { id: 2, title: 'create redux', done: false },
  ],
  field: '',
}
const tasksReducer = (state = initialeState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return { ...state }
    case DELETE_TASK:
      return {
        ...state,
        data: state.data.filter((task) => task.id !== action.payload),
      }
    case ADD_TASK:
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: state.data.length !== 0 ? state.data.length : 0,
            title: action.payload,
            done: false,
          },
        ],
      }
    case COMPLETE_TASK:
      return {
        ...state,
        data: state.data.map((task) => {
          if (task.id === action.payload) {
            task.done = !task.done
          }
          return task
        }),
      }
    case CHANGE_INPUT:
      return { ...state, field: action.payload.target.value }
    case CLEAR_INPUT:
      return { ...state, field: action.payload }
    default: {
      return state
    }
  }
}
export default tasksReducer
