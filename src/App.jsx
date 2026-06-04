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
  const [visibleCount, setVisibleCount] = useState(4);

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

  function clearTasks() {
    const confirmClear = window.confirm("Tem certeza que deseja apagar todas as tarefas?");

    if (confirmClear) {
      setTasks([]);
    }
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

  function updateTaskTitle(taskId, newTitle) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          title: newTitle,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = filter === "todas" || task.status === filter;
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  const visibleTasks = filteredTasks.slice(0, visibleCount);
  const hasMoreTasks = filteredTasks.length > visibleCount;

  return (
    <main className="app">
      <Header />

      <section className="content dashboard-content">
        <div className="board-layout">
          <aside className="entry-panel">
            <h2>Nova tarefa</h2>
            <p>Cadastre tarefas com prioridade e status.</p>

            <TaskForm onAddTask={addTask} />

            <SummaryCards tasks={tasks} />

            {tasks.length > 0 && (
              <button className="clear-button" onClick={clearTasks}>
                Limpar todas as tarefas
              </button>
            )}

            <input
              className="search-input"
              type="text"
              placeholder="Buscar tarefa..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <FilterBar currentFilter={filter} onChangeFilter={setFilter} />
          </aside>

          <section className="tasks-panel">
            <div className="tasks-panel-header">
              <div>
                <h2>Tarefas cadastradas</h2>
                <p>
                  Exibindo {visibleTasks.length} de {filteredTasks.length} tarefas.
                </p>
              </div>
            </div>

            <TaskList
              tasks={visibleTasks}
              onDeleteTask={deleteTask}
              onUpdateTaskStatus={updateTaskStatus}
              onUpdateTaskTitle={updateTaskTitle}
            />

            {hasMoreTasks && (
              <button
                className="show-more-button"
                onClick={() => setVisibleCount(visibleCount + 4)}
              >
                Ver mais tarefas
              </button>
            )}

            {visibleCount > 4 && (
              <button
                className="show-less-button"
                onClick={() => setVisibleCount(4)}
              >
                Mostrar menos
              </button>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;