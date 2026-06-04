import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("todas");

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  function updateTaskStatus(taskId, newStatus) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          status: newStatus,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  const filteredTasks =
    filter === "todas"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  return (
    <main className="app">
      <Header />

      <section className="content">
        <h2>Cadastro de tarefas</h2>
        <p>Adicione tarefas com prioridade e status.</p>

        <TaskForm onAddTask={addTask} />

        <div className="task-counter">
          <strong>Total de tarefas:</strong> {tasks.length}
        </div>

        <FilterBar currentFilter={filter} onChangeFilter={setFilter} />

        <TaskList
          tasks={filteredTasks}
          onDeleteTask={deleteTask}
          onUpdateTaskStatus={updateTaskStatus}
        />
      </section>
    </main>
  );
}

export default App;