import { useState } from "react";

function TaskCard({ task, onDeleteTask, onUpdateTaskStatus, onUpdateTaskTitle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

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

  function saveEdit() {
    if (editedTitle.trim() === "") {
      return;
    }

    onUpdateTaskTitle(task.id, editedTitle.trim());
    setIsEditing(false);
  }

  function cancelEdit() {
    setEditedTitle(task.title);
    setIsEditing(false);
  }

  return (
    <article className="task-card">
      {isEditing ? (
        <input
          className="edit-input"
          type="text"
          value={editedTitle}
          onChange={(event) => setEditedTitle(event.target.value)}
        />
      ) : (
        <h3>{task.title}</h3>
      )}

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

      <div className="task-actions">
        {isEditing ? (
          <>
            <button className="save-button" onClick={saveEdit}>
              Salvar
            </button>

            <button className="cancel-button" onClick={cancelEdit}>
              Cancelar
            </button>
          </>
        ) : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Editar
          </button>
        )}

        <button className="delete-button" onClick={() => onDeleteTask(task.id)}>
          Excluir
        </button>
      </div>
    </article>
  );
}

export default TaskCard;