import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
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
      </section>
    </main>
  );
}

export default App;