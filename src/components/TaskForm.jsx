import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("media");
  const [status, setStatus] = useState("a-fazer");

  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title,
      priority: priority,
      status: status,
    };

    onAddTask(newTask);

    setTitle("");
    setPriority("media");
    setStatus("a-fazer");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <select value={priority} onChange={(event) => setPriority(event.target.value)}>
        <option value="baixa">Baixa</option>
        <option value="media">Média</option>
        <option value="alta">Alta</option>
      </select>

      <select value={status} onChange={(event) => setStatus(event.target.value)}>
        <option value="a-fazer">A fazer</option>
        <option value="em-andamento">Em andamento</option>
        <option value="concluida">Concluída</option>
      </select>

      <button type="submit">Adicionar tarefa</button>
    </form>
  );
}

export default TaskForm;