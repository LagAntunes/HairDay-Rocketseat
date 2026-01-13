import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD");
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD");

form.onsubmit = async function (event) {
  event.preventDefault();

  try {
    const name = clientName.value.trim();

    const hourSelected = document.querySelector(".hour-selected");

    const [hour] = hourSelected.innerText.split(":");

    if (!hourSelected) {
      alert("Selecione uma hora");
    }

    const when = dayjs(selectedDate.value).add(hour, "hour");

    const id = new Date().getTime();

    await scheduleNew({
      id,
      name,
      when,
    });
    
    await schedulesDay();

    clientName.value = "";
  } catch (error) {
    alert("Erro ao enviar formulário");
    console.log(error);
  }
};
