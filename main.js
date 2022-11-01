import { SelectBar, addListeners } from "./Select-Bar"

const colorPicker = document.getElementsByClassName("nav--color-picker")[0]
const schemeDivs = document.getElementsByClassName("main--color")
const colorhexes = document.getElementsByClassName("footer--color-hex")
const getSchemeBtn = document.getElementById("get-scheme-btn")

let selectedColor = colorPicker.value.slice(1)

// Renders the app
function main() {
    SelectBar()
    addListeners()
}

function watchColorPicker(event) {
    const hex = event.target.value.slice(1)
    selectedColor = hex
}

async function getScheme() {
    const selectedScheme = document
        .getElementById("span-scheme")
        .innerText.toLowerCase()

    if (!selectedScheme.includes("select")) {
        const response = await fetch(
            `https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedScheme}&count=5`
        )
        const schemes = await response.json()
        paintColors(schemes.colors)
    }
}

function paintColors(colors) {
    const hexColors = colors.map((color) => {
        return color.hex.value
    })
    for (let i = 0; i < schemeDivs.length; i++) {
        schemeDivs[i].style.backgroundColor = hexColors[i]
        colorhexes[i].innerText = hexColors[i]
        // colorhexes[i].style.color = hexColors[i]
    }
}

getSchemeBtn.addEventListener("click", getScheme)

colorPicker.addEventListener("change", watchColorPicker, false)

main()
