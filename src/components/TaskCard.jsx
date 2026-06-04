function TaskCard({ task }) {
  return (
    <article className="task-card">
      <h3>{task.title}</h3>

      <div className="task-info">
        <span>Prioridade: {task.priority}</span>
        <span>Status: {task.status}</span>
      </div>
    </article>
  );
}

export default TaskCard;