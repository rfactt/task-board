function SummaryCards({ tasks }) {
  const totalTasks = tasks.length;
  const todoTasks = tasks.filter((task) => task.status === "a-fazer").length;
  const progressTasks = tasks.filter((task) => task.status === "em-andamento").length;
  const completedTasks = tasks.filter((task) => task.status === "concluida").length;

  return (
    <section className="summary-cards">
      <div className="summary-card">
        <span>Total</span>
        <strong>{totalTasks}</strong>
      </div>

      <div className="summary-card">
        <span>A fazer</span>
        <strong>{todoTasks}</strong>
      </div>

      <div className="summary-card">
        <span>Em andamento</span>
        <strong>{progressTasks}</strong>
      </div>

      <div className="summary-card">
        <span>Concluídas</span>
        <strong>{completedTasks}</strong>
      </div>
    </section>
  );
}

export default SummaryCards;