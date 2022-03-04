const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (event){
        event.preventDefault();
        const emailAddress = document.getElementById("emailAddress");
        const password = document.getElementById("password");
        const url = document.getElementById("url");
        console.log("Email Address : " + emailAddress.value);
        console.log("Password :" + password.value);
        console.log("URL :" + url.value);
});




//Alternative

const loginForm1 = document.getElementById("loginForm");
loginForm1.addEventListener("submit", printFromData);


function printFromData(event){
    event.preventDefault();
    const emailAddress = document.getElementById("emailAddress");
    const password = document.getElementById("password");
    const url = document.getElementById("url");
    console.log("Email Address : " + emailAddress.value);
    console.log("Password :" + password.value);
    console.log("URL :" + url.value);
 
}


  
  

