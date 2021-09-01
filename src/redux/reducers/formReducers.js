import { CHANGE_INPUT, CLEAR_INPUT } from '../actions/actionsType'

const initialeState = { value: '' }

const formReducer = (state = initialeState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return { value: action.payload.target.value }
    case CLEAR_INPUT:
      return { value: action.payload }
    default:
      return {
        state,
      }
  }
}
export default formReducer
