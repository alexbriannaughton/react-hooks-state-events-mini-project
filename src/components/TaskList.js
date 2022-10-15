import React from "react";
import Task from "./Task";

function TaskList({selected, categories, tasks}) {
  console.log(tasks)
  const renderTasks = tasks.map((task) => {
    return <Task category={task.category} key={task.text} text={task.text}/>
  })

  return (
    <div className="tasks">
      {renderTasks}
    </div>
  );
}

export default TaskList;
