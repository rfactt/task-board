export function getPriorityLabel(priority) {
  if (priority === "baixa") return "Baixa";
  if (priority === "media") return "Média";
  if (priority === "alta") return "Alta";

  return "Sem prioridade";
}

export function getStatusLabel(status) {
  if (status === "a-fazer") return "A fazer";
  if (status === "em-andamento") return "Em andamento";
  if (status === "concluida") return "Concluída";

  return "Sem status";
}