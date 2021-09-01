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
  // const [tasks, setTasks] = useState([
  //   { id: 0, title: 'create app', done: false },
  //   { id: 1, title: 'create react', done: true },
  //   { id: 2, title: 'create redux', done: false },
  // ])
  const tasks = useSelector((store) => store.tasks)
  console.log('tasks', tasks.data)
  // console.log('input', input)

  const dispatch = useDispatch()
  // const addTask = (task) => {
  //   const newTasks = tasks.concat({
  //     id: tasks.length !== 0 ? tasks.length : 0,
  //     title: task,
  //     done: false,
  //   })
  //   setTasks(newTasks)
  // }

  // const doneTask = (id) => {
  //   let completeTasks = tasks.map((task) => {
  //     if (task.id === id) {
  //       task.done = !task.done
  //     }
  //     return task
  //   })
  //   setTasks(completeTasks)
  // }

  // const deleteTask = (id) => {
  //   setTasks(tasks.filter((task) => task.id !== id))
  // }

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
