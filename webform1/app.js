// var btnOnclick = document.getElementById("btnSubmit");
// btnOnclick.onclick = function(){
//     var emailAddress = document.getElementById("emailAddress").value;
//     var password = document.getElementById("password").value;
//     var url = document.getElementById("url").value;
//     console.log("Email Address :" + emailAddress);
//     console.log("Password :" + password);
//     console.log("url :" + url);

// };
btnOnclick.addEventListener("submit", function(){
    var emailAddress = document.getElementById('emailAddress').innerHTML;
    var password = document.getElementById("password");
    var url = document.getElementById("url");
    console.log("Email Address :" + emailAddress);
    console.log("Password :" + password);
    console.log("url :" + url);
});

// function display(){
//     window.alert( document.getElementById("num").value +" "+document.getElementById("na").value+" " +document.getElementById("pr").value+" "+ document.getElementById("qt").value+" " +document.getElementById("selc").value+" " +document.getElementById("dat").value);
//     }
//     var btn = document.getElementById("mybtn");
//     // add event listener for the button, for action "click"
//     btn.addEventListener("click", display);




    // const loginForm = document.getElementById("btnSubmit");
    // loginForm.addEventListener("submit", printFromData);

    // function printFromData(event){
    //     event.preventDefault();
    //     const txtEmail = document.getElementById("email");
    //     const password = document.getElementById("password");
    //     // const url = document.getElementById("url");
    //     console.log(txtEmail.value);
    //     console.log(password.value);


    // }