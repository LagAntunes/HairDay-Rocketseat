import { API_CONFIG } from "./api-config.js";

export async function scheduleNew({id, name, when}) {
    try {
        await fetch(`${API_CONFIG.baseUrl}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                name,
                when,
            }),
        });
        alert("Horário agendado com sucesso!");
    } catch (error) {
        console.error(error);
        alert("Erro ao agendar o horário, tente novamente mais tarde.");
    }
}