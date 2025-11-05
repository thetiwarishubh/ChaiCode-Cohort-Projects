const clock = document.querySelector(".clock");
const date = document.querySelector(".date");
const digitalClock = document.querySelector(".digital-clock");
const hourArrow = document.querySelector(".hour");
const minuteArrow = document.querySelector(".minute");
const secondArrow = document.querySelector(".second");

const timeContainer = function () {
  const currentTime = new Date();
  const hour = currentTime.getHours().toString().padStart(2, "0");
  const minute = currentTime.getMinutes().toString().padStart(2, "0");
  const second = currentTime.getSeconds().toString().padStart(2, "0");
  digitalClock.textContent = `${hour}:${minute}:${second}`;
};
timeContainer();
setInterval(() => {
  timeContainer();
}, 1000);

const dateContainer = function () {
  const currentDate = new Date();
  const dayNumber = currentDate.getDay();
  const dates = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[dayNumber];
  date.textContent = `${dayName} ${dates} ${month} ${year}`;
};
dateContainer();
