const bulb = document.getElementById("bulb");
const body = document.body;
const btn = document.getElementById('toggleButton');
const statusText = document.getElementById('status');
const heading = document.querySelector('h1');
const subHeading = document.querySelector("p")

let bulbColor = false;
btn.addEventListener("click", () => {
    if (!bulbColor) {
        body.style.backgroundColor = "#212121"
        bulb.style.backgroundColor = "#FFFF00";
        heading.style.color = "#fff";
        subHeading.style.color = "#fff";
        statusText.style.color = "#fff";
        btn.innerHTML = "Turn Off";
        statusText.innerHTML = "Status: On"
        bulbColor = true;
    } else {
        body.style.backgroundColor = "";
        bulb.style.backgroundColor = "";
        heading.style.color = "";
        subHeading.style.color = "";
        statusText.style.color = "";
        btn.innerHTML = "Turn On";
        statusText.innerHTML = "Status: Off"
        bulbColor = false;
    }
})