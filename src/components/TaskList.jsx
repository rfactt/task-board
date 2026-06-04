import TaskCard from "./TaskCard";

function TaskList({ tasks, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty-message">Nenhuma tarefa cadastrada ainda.</p>;
  }

  return (
    <section className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} />
      ))}
    </section>
  );
}

export default TaskList;