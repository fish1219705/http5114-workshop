
var submit = document.getElementById("submit");

submit.addEventListener("click",function(e){
    console.log("clicked");
    console.log(e);

    var errors = 0;

    var lettersSpaces = new RegExp("^[A-Za-zs]*$");
    var lettersSpacess = new RegExp("[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}");

    var name = document.getElementById("name");
    var nameError = document.getElementById("name-error");
    if(!name.value){
        nameError.innerHTML = "Please provide your name";
        errors++;
    }
    else if(!lettersSpaces.test(name.value)){
        nameError.innerHTML = "Please provide a valid name";
        errors++;
    } else {
        nameError.innerHTML = "";
    }

    var email = document.getElementById("email");
    var emailError = document.getElementById("email-error");
    if(!email.value){
        emailError.innerHTML = "Please prvide your email";
        errors++;
    } else if (!lettersSpacess.test(email.value)){
        emailError.innerHTML = "Please provide a valid email";
        errors++;
    } else {
        emailError.innerHTML = "";
    }


    if(errors == 0){
        var message = document.getElementById("message");
        message.innerHTML = "Thank you!";
        name.value = ""
        email.value = "";
    }


    
    e.preventDefault();
});