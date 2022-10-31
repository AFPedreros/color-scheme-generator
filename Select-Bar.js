// DOM elements
const wrapper = document.getElementById("wrapper")
const selectBtn = document.getElementById("select-btn")
const spanScheme = document.getElementById("span-scheme")
const ul = document.getElementsByClassName("li-container")
// The color scheme the user selected
let schemeSelected = ""

// Adds the events to show the option selected when is hoover and change the selected
// option on top when the user clicks an option
export function addListeners() {
    for (let i = 0; i <= ul.length - 1; i++) {
        const div = ul[i]

        div.addEventListener("click", () => {
            schemeSelected = div.firstElementChild.innerText
            spanScheme.innerText = schemeSelected
            wrapper.classList.toggle("active")
        })

        div.addEventListener("mouseover", () => {
            div.querySelector(".fa-check").classList.add("active")
        })
        div.addEventListener("mouseout", () => {
            div.querySelector(".fa-check").classList.remove("active")
        })
    }
}

// Add the event to show the options when its clicked
export function SelectBar() {
    selectBtn.addEventListener("click", () => {
        wrapper.classList.toggle("active")
    })
}
