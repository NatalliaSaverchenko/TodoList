const Task = ({ task, doneTask, deleteTask }) => {
  const ActionBtn = () => {
    return (
      <div>
        {!task.done ? (
          <span style={{ color: 'green' }} onClick={doneTask}>
            ✔️
          </span>
        ) : (
          <span style={{ color: 'red' }} onClick={deleteTask}>
            ❌
          </span>
        )}
      </div>
    )
  }
  return (
    <div>
      {!task.done ? (
        <span style={{ color: 'green', textDecoration: 'none' }}>
          {task.title}
        </span>
      ) : (
        <span style={{ color: 'red', textDecoration: 'line-through' }}>
          {task.title}
        </span>
      )}
      <ActionBtn />
    </div>
  )
}
export default Task
