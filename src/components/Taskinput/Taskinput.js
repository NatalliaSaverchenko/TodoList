import React from 'react'
class Taskinput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '' }
  }
  inputChange = (e) => {
    this.setState({ input: e.target.value })
  }
  addTask = () => {
    const { input } = this.state
    if (input) {
      this.props.addTask(input)
      this.setState({ input: '' })
    }
  }
  render() {
    const { input } = this.state
    return (
      <div>
        <input onChange={this.inputChange} value={input}></input>
        <button onClick={this.addTask}>Add</button>
      </div>
    )
  }
}
export default Taskinput
