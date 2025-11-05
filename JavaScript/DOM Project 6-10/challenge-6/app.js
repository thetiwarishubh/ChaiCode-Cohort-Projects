const clock = document.querySelector(".clock");
const date = document.querySelector(".date");
const digitalClock = document.querySelector(".digital-clock");
const hourArrow = document.querySelector(".hour");
const minuteArrow = document.querySelector(".minute");
const secondArrow = document.querySelector(".second");

const setClock = function () {
  const currentTime = new Date();

  const second = currentTime.getSeconds();
  const minute = currentTime.getMinutes();
  const hour = currentTime.getHours();

  const secondDegrees = (second / 60) * 360;
  const minuteDegrees = (minute / 60) * 360 + (second / 60) * 6;
  const hourDegrees = (hour / 12) * 360 + (minute / 60) * 30;

  secondArrow.style.transform = `rotate(${secondDegrees}deg)`;
  minuteArrow.style.transform = `rotate(${minuteDegrees}deg)`;
  hourArrow.style.transform = `rotate(${hourDegrees}deg)`;
};
for (let i = 1; i <= 12; i++) {
  const number = document.createElement("div");
  number.classList.add("number");
  number.textContent = i;

  const angle = i * 30;
  const radius = 110;

  number.style.position = "absolute";
  number.style.transformOrigin = "center";
  number.style.transform = `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`;
  number.style.textAlign = "center";
  number.style.color = "white";

  clock.appendChild(number);
}

setInterval(() => {
  setClock();
}, 1000);
setClock();

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
