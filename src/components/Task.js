import style from "./style"

const Task = ({title, desc, deleteTask, id, createTask}) => {
  
  const onClick = () => {
    deleteTask(id)
  }

  const onCopy = () => {
    createTask(title, desc)
  }
  
  return (
    <div>
      <h3
        // style={titleStyle}
        style={style.title}
      >
        {title}
      </h3>
      <p>{desc}</p>
      <button onClick={onClick}>Delete</button>
      <button onClick={onCopy}>copy</button>
    </div>
  )
}

// const titleStyle = {
//   "color": "red",
//   "fontSize": "2rem"
// }

export default Task

