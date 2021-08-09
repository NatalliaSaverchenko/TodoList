import React from 'react'
import { useState } from 'react'
const Taskinput = ({ addTask }) => {
  const [input, setInput] = useState('')

  const inputChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input) {
      addTask(input)
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
