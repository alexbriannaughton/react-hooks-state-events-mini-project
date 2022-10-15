import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [selected, setSelected] = useState("All")

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selected={selected} setSelected={setSelected} categories={CATEGORIES} />
      <NewTaskForm />
      <TaskList selected={selected} categories={CATEGORIES} tasks={TASKS}/>
    </div>
  );
}

export default App;
