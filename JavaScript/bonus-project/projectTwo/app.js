const input = document.getElementById("seconds");
const btn = document.querySelector("button");
const display = document.querySelector(".display");

btn.addEventListener("click", () => {
  let inputValue = input.value;
  if (inputValue === "") {
    alert(`Please Enter time in seconds`);
  } else {
    setInterval(() => {
      inputValue--;
      if (inputValue > 0) {
        display.textContent = `Time remaining : ${inputValue + 1}`;
        btn.textContent = `Stop Countdown`
        input.value = "";
      } else {
        display.textContent = `Countdown Complete!`;
        input.value = "";
        setTimeout(()=> {
            window.location.reload()
        }, 5000)
      }
    }, 1000);
  }
});
