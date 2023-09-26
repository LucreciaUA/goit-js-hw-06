const output = document.querySelector(`#name-output`);
const input = document.querySelector(`#name-input`);


input.addEventListener("input", (event) => {
  

    
        output.textContent = event.currentTarget.value||`Anonymus`;
    

 
});  



