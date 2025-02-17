import AddTodoInput from "./Components/AddTodoInput";
import TodoList from "./Components/TodoList";

import "./App.css";
import { useEffect, useState } from "react";
import AppContext from "./context/AppContext";

function App() {
  const [taskList, setTaskList] = useState([]);

  function fetchTasks() {
    fetch("http://localhost:8080/todo").then(async (response) => {
      const jsonRes = await response.json();
      setTaskList(jsonRes);
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


123 - //asdasd - /asdlkzkcx - la;sdk;l
123 - //zxc,mn,

if(username === "saihl" && password === "123") {
  return true;
}



