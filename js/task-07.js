const input = document.getElementById(`font-size-control`)
const text = document.querySelector("#text")

input.addEventListener("input", textSize)

function textSize() {
    const size = input.value  
    text.style.fontSize = `${size}px`
}