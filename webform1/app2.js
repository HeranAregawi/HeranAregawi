//app2.js

var btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener( "click", function(){
    var emailAddress = document.getElementById(emailAddress).value;
    var password = document.getElementById(password).value;
    var url = document.getElementById(url).value;
   wiindow.alert( "Email Address :"+ emailAddress + "Password :" + password + "URL :" + url);

});