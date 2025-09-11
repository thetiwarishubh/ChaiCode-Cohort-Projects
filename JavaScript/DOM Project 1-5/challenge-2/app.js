const mainHeading = document.getElementById("mainHeading");
const buttons = document.querySelectorAll(".color-buttons button");

buttons.forEach(btn => {
    btn.addEventListener("click", function() {
        let color = this.innerText.toLowerCase()
        if(color === "reset"){
            mainHeading.style.color = "";
        } else {
            mainHeading.style.color = color;
        }
    })
})
