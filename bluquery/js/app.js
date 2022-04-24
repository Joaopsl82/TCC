
var btnSignin = document.querySelector("#entrar_btn");
var btnSignup = document.querySelector("#criarconta_btn");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})


