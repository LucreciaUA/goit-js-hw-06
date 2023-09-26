const field = document.querySelector(`#validation-input`);
const length = Number(document.getElementById(`validation-input`).getAttribute(`data-length`))
console.dir(length)

field.addEventListener("blur", checkLength)

function checkLength(evt) {
    const inputLength = evt.currentTarget.value.length
    if (inputLength === length) {
        field.classList.add('valid')
       
    }

    else if (inputLength != length && inputLength>0) {
        field.classList.add('invalid')
    }
}

