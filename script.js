// selecting html elements
let emailElement = document.querySelector("#email");
let messageElement = document.querySelector("#message");


let submitButton = document.querySelector("#submit-button");

submitButton.addEventListener('click',function(e){
    e.preventDefault();
    // console.log('clicked button')

    let emailValue = emailElement.value;
    let messageValue = messageElement.value;
    
    // console.log("email:",emailValue);
    // console.log("message",messageValue);

    if(emailValue.includes('@')){
        alert("thank you for message");   
    }
    else{
        alert("invalid email address");
    }


})



// attaching click listener

// getting user entered values

// javascript validations