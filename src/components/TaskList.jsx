import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <p className="empty-message">Nenhuma tarefa cadastrada ainda.</p>;
  }

  return (
    <section className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </section>
  );
}

export default TaskList;