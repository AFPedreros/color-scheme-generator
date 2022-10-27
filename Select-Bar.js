const wrapper = document.getElementById("wrapper")
const selectBtn = document.getElementById("select-btn")
const spanScheme = document.getElementById("span-scheme")
let schemeSelected = ""
const ul = document.getElementsByClassName("li-container")

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

export function SelectBar() {
    selectBtn.addEventListener("click", () => {
        wrapper.classList.toggle("active")
    })
}
