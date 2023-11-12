var emailInput = document.querySelector("#mail");
var validationText = document.querySelector(".validationText")
var subscribeBtn = document.querySelector(".subscribeBtn");
var dismissBtn = document.querySelector(".dismiss")
var responseMessage = document.querySelector(".responseMessage");
var newsLetterContainer = document.querySelector(".container");


var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

subscribeBtn.onclick = ()=>{
    if (emailRegex.test(emailInput.value)) {
        responseMessage.style.display = "flex"
        newsLetterContainer.style.display = "none"
    } else {
        emailInput.style.backgroundColor = "hsl(4, 100%, 87%)"
        validationText.style.display = "inline"
        emailInput.style.border = "1px solid hsl(1, 100%, 57%)"
        emailInput.style.color = "hsl(1, 100%, 57%)"
    }
}
dismissBtn.onclick = () =>{
    responseMessage.style.display = "none"
    newsLetterContainer.style.display = "flex"
    location.reload();
}
