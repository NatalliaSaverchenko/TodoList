import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { changeInput, clearInput } from '../../redux/actions/formActions'
const Taskinput = ({ addTask }) => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  // const input = useSelector((store) => store.input)

  const inputChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input) {
      dispatch(addTask(input))
      setInput('')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={inputChange} value={input}></input>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </>
  )
}
export default Taskinput
