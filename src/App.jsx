import AddTodoInput from "./Components/AddTodoInput";
import TodoList from "./Components/TodoList";

import "./App.css";
import { useEffect, useState } from "react";
import AppContext from "./context/AppContext";
import axios from "axios";


function App() {

  const [taskList, setTaskList] = useState([]);

  function fetchTasks() {
    axios.get("http://localhost:8080/todo", {
      headers : {
        Authorization : localStorage.getItem("token")
      }
    }).then(async (response) => {
      setTaskList(response.data);
    });
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  console.log(taskList);


  return (
    <AppContext.Provider value={{ fetchTasks: fetchTasks, taskList: taskList }}>
      <div>
        <h1>TODO App</h1>
        <AddTodoInput />
        <TodoList />
      </div>
    </AppContext.Provider>
  );
}

export default App;
