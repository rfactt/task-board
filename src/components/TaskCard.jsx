function TaskCard({ task, onDeleteTask, onUpdateTaskStatus }) {
  function getPriorityLabel(priority) {
    if (priority === "baixa") return "Baixa";
    if (priority === "media") return "Média";
    if (priority === "alta") return "Alta";
  }

  function getStatusLabel(status) {
    if (status === "a-fazer") return "A fazer";
    if (status === "em-andamento") return "Em andamento";
    if (status === "concluida") return "Concluída";
  }

  return (
    <article className="task-card">
      <h3>{task.title}</h3>

      <div className="task-badges">
        <span className={`badge priority-${task.priority}`}>
          {getPriorityLabel(task.priority)}
        </span>

        <span className={`badge status-${task.status}`}>
          {getStatusLabel(task.status)}
        </span>
      </div>

      <select
        className="status-select"
        value={task.status}
        onChange={(event) => onUpdateTaskStatus(task.id, event.target.value)}
      >
        <option value="a-fazer">A fazer</option>
        <option value="em-andamento">Em andamento</option>
        <option value="concluida">Concluída</option>
      </select>

      <button className="delete-button" onClick={() => onDeleteTask(task.id)}>
        Excluir
      </button>
    </article>
  );
}

export default TaskCard;