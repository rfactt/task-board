import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("todas");
  const [search, setSearch] = useState("");

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

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = filter === "todas" || task.status === filter;
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

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

        <input
          className="search-input"
          type="text"
          placeholder="Buscar tarefa..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

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