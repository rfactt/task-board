function TaskCard({ task, onDeleteTask, onUpdateTaskStatus }) {
  return (
    <article className="task-card">
      <h3>{task.title}</h3>

      <div className="task-info">
        <span>Prioridade: {task.priority}</span>
        <span>Status: {task.status}</span>
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