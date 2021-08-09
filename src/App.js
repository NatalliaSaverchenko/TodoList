import React from 'react'
import Task from './components/Task/Task'
import Taskinput from './components/Taskinput/Taskinput'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 0, title: 'create app', done: false },
        { id: 1, title: 'create react', done: true },
        { id: 2, title: 'create redux', done: false },
      ],
    }
  }
  addTask = (task) => {
    this.setState((state) => {
      let { tasks } = state
      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        title: task,
        done: false,
      })
      return tasks
    })
  }
  doneTask = (id) => {
    const index = this.state.tasks.map((task) => task.id).indexOf(id)
    this.setState((state) => {
      let { tasks } = state
      tasks[index].done = true
      return tasks
    })
  }
  deleteTask = (id) => {
    const index = this.state.tasks.map((task) => task.id).indexOf(id)
    this.setState((state) => {
      let { tasks } = state
      delete tasks[index]
      return tasks
    })
  }
  render() {
    const { tasks } = this.state
    const activeTasks = tasks.filter((task) => !task.done)
    const doneTasks = tasks.filter((task) => task.done)
    return (
      <div>
        <h1>Active tasks:{activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map((task) => {
          return (
            <Task
              doneTask={() => this.doneTask(task.id)}
              deleteTask={() => this.deleteTask(task.id)}
              task={task}
              key={task.id}
            />
          )
        })}
        <Taskinput addTask={this.addTask} />
      </div>
    )
  }
}
export default App
