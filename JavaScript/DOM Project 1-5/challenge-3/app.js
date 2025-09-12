const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const ageInput = document.getElementById("ageInput");
const bioInput = document.getElementById("bioInput");
const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");

const updateValue = function(input, display){
    input.addEventListener("input", (e)=> {
        if(e.target.value !== ""){
            display.textContent = e.target.value.trim()
        } else {
            display.textContent = `Not provided`
        }
    })
}
updateValue(nameInput, nameDisplay)
updateValue(jobInput, jobDisplay)
updateValue(ageInput, ageDisplay)
updateValue(bioInput, bioDisplay)
