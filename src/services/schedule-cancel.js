import { API_CONFIG } from "./api-config.js";

export async function scheduleCancel({ id }) {
  try {
    const response = await fetch(
      `${API_CONFIG.baseUrl}/schedules/${Number(id)}`,
      { method: "DELETE" }
    );

    if (!response.ok) {
      throw new Error("Agendamento não encontrado");
    }

    alert("Horário cancelado com sucesso!");
  } catch (error) {
    console.error(error);
    alert("Erro ao cancelar o horário.");
  }
}
