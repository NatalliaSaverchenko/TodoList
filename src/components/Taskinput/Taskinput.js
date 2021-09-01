import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeInput, clearInput } from '../../redux/actions/tasksActions'
const Taskinput = ({ addTask }) => {
  const dispatch = useDispatch()
  const input = useSelector((store) => store.tasks.field)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input) {
      dispatch(addTask(input))
      dispatch(clearInput())
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => dispatch(changeInput(e))} value={input}></input>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </>
  )
}
export default Taskinput
