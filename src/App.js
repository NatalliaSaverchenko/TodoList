import React from 'react'
import { useState } from 'react'
import Task from './components/Task/Task'
import Taskinput from './components/Taskinput/Taskinput'
const App = () => {
  const [tasks, setTasks] = useState([
    { id: 0, title: 'create app', done: false },
    { id: 1, title: 'create react', done: true },
    { id: 2, title: 'create redux', done: false },
  ])

  const addTask = (task) => {
    const newTasks = tasks.concat({
      id: tasks.length !== 0 ? tasks.length : 0,
      title: task,
      done: false,
    })
    setTasks(newTasks)
  }

  const doneTask = (id) => {
    let completeTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    setTasks(completeTasks)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const activeTasks = tasks.filter((task) => !task.done)
  const doneTasks = tasks.filter((task) => task.done)
  return (
    <div>
      <h1>Active tasks:{activeTasks.length}</h1>
      {[...activeTasks, ...doneTasks].map((task) => {
        return (
          <Task
            doneTask={() => doneTask(task.id)}
            deleteTask={() => deleteTask(task.id)}
            task={task}
            key={task.id}
          />
        )
      })}
      <Taskinput addTask={addTask} />
    </div>
  )
}

export default App
