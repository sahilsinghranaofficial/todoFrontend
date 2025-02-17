import { useContext, useState } from "react";
import AppContext from "../context/AppContext";

function AddTodoInput() {
  const [todoInput, setTodoInput] = useState("")

  const appContext = useContext(AppContext)

  const fetchTasks = appContext.fetchTasks;

  console.log("appContext",appContext)

  function addTodo(e) {
    e.preventDefault();

    if(todoInput.length < 5) {
      alert("Todo length must be 5 or more than 5 chars.")
      return;
    }

    fetch("http://localhost:8080/todo", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        task: todoInput,
      }),
    }).then(res => {
      fetchTasks()
      setTodoInput("")
    })
  }



  return (
    <form className="todoInputWrapper" onSubmit={addTodo}>
      <input minLength="5" required type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)}  placeholder="Start Typing..."  />
      <button>Submit</button>
    </form>
  );
}

export default AddTodoInput;
