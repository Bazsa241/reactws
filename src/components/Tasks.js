import Task from "./Task"

const Tasks = ({todo, deleteTask, createTask}) => {
  return (
    <div>
      {todo.map(elem =>
        <Task
          title={elem.title}
          desc={elem.description}
          deleteTask={deleteTask}
          createTask={createTask}
          key={elem.id}
          id={elem.id}
        />
      )}
    </div>
  )
}

export default Tasks

