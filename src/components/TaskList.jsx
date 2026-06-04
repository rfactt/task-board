import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  onDeleteTask,
  onUpdateTaskStatus,
  onUpdateTaskTitle,
}) {
  if (tasks.length === 0) {
    return <p className="empty-message">Nenhuma tarefa encontrada.</p>;
  }

  return (
    <section className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onUpdateTaskStatus={onUpdateTaskStatus}
          onUpdateTaskTitle={onUpdateTaskTitle}
        />
      ))}
    </section>
  );
}

export default TaskList;