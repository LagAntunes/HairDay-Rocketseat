import dayjs from "dayjs";
import { API_CONFIG } from "./api-config";

export async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(`${API_CONFIG.baseUrl}/schedules`);
    const data = await response.json();
    const dailySchedules = data.filter((schedule) => {
      return dayjs(date).isSame(schedule.when, "day");
    });
    return dailySchedules;
  } catch (error) {
    console.error(error);
    alert("Erro ao buscar agendamentos do dia");
  }
}
