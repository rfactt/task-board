import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskId) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

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

        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      </section>
    </main>
  );
}

export default App;