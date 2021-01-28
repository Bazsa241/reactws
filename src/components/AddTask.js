import {useState} from "react"


const AddTask = ({createTask}) => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const titleChange = (e) => {
    setTitle(e.target.value)
  }

  const descChange = (e) => {
    setDesc(e.target.value)
  }

  const addTask = (e) => {
    e.preventDefault()
    createTask(title, desc)

    setTitle("")
    setDesc("")
  }


  return (
    <form onSubmit={addTask} >
      <input
        type="text"
        placeholder="Title"
        onChange={titleChange}
        value={title}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={descChange}
        value={desc}
      />
      <button>Submit</button>
    </form>
  )
}

export default AddTask