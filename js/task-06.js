const field = document.getElementById(`validation-input`);
const length = Number(field.dataset.length);
console.dir(field.dataset.length);

field.addEventListener("blur", checkLength)

function checkLength(evt) {
    const inputLength = evt.currentTarget.value.length
    console.dir(evt.currentTarget.value.length)
    
    if (inputLength === length) {
        field.classList.remove('invalid')
        field.classList.add('valid')
        
    }

    else if (inputLength != length && inputLength != 0) {
        field.classList.remove('valid')
        field.classList.add('invalid')
        
    }
    
}

