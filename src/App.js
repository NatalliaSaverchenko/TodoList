import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteTask,
  completeTask,
  addTask,
  // getActiveTasks,
  // getDoneTasks,
} from './redux/actions/tasksActions'
import Task from './components/Task/Task'
import Taskinput from './components/Taskinput/Taskinput'
const App = () => {
  const tasks = useSelector((store) => store.tasks)
  // console.log('tasks', tasks.data)

  const dispatch = useDispatch()

  // const activeTasks = tasks.filter((task) => !task.done)
  // const activeTasks = dispatch(getActiveTasks())
  // console.log('activetasks', activeTasks)
  // // const doneTasks = tasks.filter((task) => task.done)
  // const doneTasks = dispatch(getDoneTasks())
  // console.log('donetasks', doneTasks)

  return (
    <div>
      <h1>Tasks:</h1>
      {tasks.data.map((task) => {
        return (
          <Task
            doneTask={() => dispatch(completeTask(task.id))}
            deleteTask={() => dispatch(deleteTask(task.id))}
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
