import { CHANGE_INPUT, CLEAR_INPUT } from '../actions/actionsType'
export const changeInput = (e) => {
  e.preventDefault()
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
