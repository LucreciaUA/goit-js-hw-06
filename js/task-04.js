const count = document.querySelector(`#value`)
const plus = document.querySelector(`[data-action="increment"]`)
const minus = document.querySelector(`[data-action="decrement"]`)
let counter =0




plus.addEventListener('click', () => {
    counter++;
    count.innerHTML = counter;
}
)


minus.addEventListener('click', () => {
    counter--;
    count.innerHTML = counter;
}
)
