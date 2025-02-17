import { useContext } from "react";
import AppContext from "../context/AppContext";

function TodoList(props) {
  const appContext = useContext(AppContext)
  const taskList = appContext.taskList
  console.log("TodO list:m ", taskList)

  return (
    <ul>
      {taskList.map((task) => {
        return (
          <li key={task.id} className="">
            {task.task}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
