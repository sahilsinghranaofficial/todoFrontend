function TodoList(props) {
  const { taskList } = props;
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
