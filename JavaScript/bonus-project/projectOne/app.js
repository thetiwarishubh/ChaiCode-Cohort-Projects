const time = document.getElementById("time");
const dates = document.getElementById("date");

const currentTimeandDate = function () {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, 0);
  const second = date.getSeconds().toString().padStart(2, 0);
  const ampm = hour % 12 || 12;
  time.textContent = `${ampm.toString().padStart(2, 0)}:${minute}:${second} ${hour >= 12 ? "PM" : "AM"}`;

  const currentDate = date.getDate();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = date.getFullYear();
  dates.textContent = [dayNames[date.getDay()], currentDate, monthNames[date.getMonth()], year];
};

currentTimeandDate();

setInterval(() => {
  currentTimeandDate();
}, 1000);
