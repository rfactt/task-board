function TaskCard({ task, onDeleteTask }) {
  return (
    <article className="task-card">
      <h3>{task.title}</h3>

      <div className="task-info">
        <span>Prioridade: {task.priority}</span>
        <span>Status: {task.status}</span>
      </div>

      <button className="delete-button" onClick={() => onDeleteTask(task.id)}>
        Deletar
      </button>
    </article>
  );
}

export default TaskCard;