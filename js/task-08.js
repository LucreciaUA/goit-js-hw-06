const form = document.querySelector(".login-form");

form.addEventListener("submit", check)

function check(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;

    
    if (email.value=="") {
     alert(`Email connot be empty`)
        
    }

    else if (password.value=="") {
        alert(`Password cannot be empty`)
        
    }
    const data = {
        email: email.value,
        password: password.value,
    }

    console.log(data)
    evt.currentTarget.reset();
}
