import AddTodoInput from "./Components/AddTodoInput";
import TodoList from "./Components/TodoList";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);


  function fetchTasks() {
    fetch("http://localhost:8080").then(async (response) => {
      const jsonRes = await response.json();
      setTaskList(jsonRes);
    });
  }

  useEffect(() => {
    fetchTasks()
  }, []);

  console.log(taskList);

  return (
    <div>
      <h1>TODO App</h1>
      <AddTodoInput  fetchTasks={fetchTasks}  />
      <TodoList taskList={taskList} />
    </div>
  );
}

export default App;
