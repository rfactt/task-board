import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import SummaryCards from "./components/SummaryCards";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("react-task-board-tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [filter, setFilter] = useState("todas");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("react-task-board-tasks", JSON.stringify(tasks));
  }, [tasks]);

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

        <SummaryCards tasks={tasks} />

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