//app2.js

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener( "submit", function(){
    const emailAddress = document.getElementById("emailAddress");
    const password = document.getElementById("password");
    const url = document.getElementById("url");
   window.alert( "Email Address : "+ emailAddress.value + "\n" + "Password : " + password.value + "\n" + "URL : " + url.value);

});