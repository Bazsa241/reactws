import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import {useState} from "react"

function App() {

  const [todo, setTodo] = useState(
  // [
  //   {id: 0, title: "Codewars", description: "5kyu"},
  //   {id: 1, title: "Solo", description: "fidget app"},
  //   {id: 2, title: "Solo", description: "Social Dashboard"},
  //   {id: 3, title: "Sport", description: "5km futás"},
  // ]
  []
  )

  const [showAdd, setShowAdd] = useState(false)
  
  const toggleAdd = () => {
    setShowAdd(!showAdd)
  }



  //CREATE TASK
  const createTask = (title, desc) => {
    const id = Date.now();
    
    setTodo([...todo, {title: title, description: desc, id}])
  }

  //DELETE TASK
  const deleteTask = (deleteId) => {
    setTodo(todo.filter(item => item.id !== deleteId))
  }

  return (
    <div className="App">
      <h1>ToDo</h1>
      <button onClick={toggleAdd}>
      {showAdd ? "Close" : "Add"}
      </button>
      {showAdd ? <AddTask createTask={createTask}/> : ""}
      <Tasks
        todo={todo}
        createTask={createTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
