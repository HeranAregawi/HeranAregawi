function renderTime(){
    var mydate = new Date();
    var year = mydate.getFullYear();
    if(year < 1000) {
        year += 1900
    }
    
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var date = mydate.getDate();
    // var dayArray = new Array ("Sunday", " Munday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday");
    // var monthArray = new Array("January", "Febrarury", "March", "April", "May", "June", "July", "August","September", "October", "Novenmber" );
//Date end

//Time

var currenTime = new Date();
var h = currenTime.getHours();
var m = currenTime.getMinutes();
var s = currenTime.getSeconds();

if(h == 24){
    h = 0;
}else if( h > 12){ 
    h = h - 0;
}
if(h < 10){
    h = '0' + h ;
}
if(m < 10){
    m = '0' + m;
}
if(s < 10){
    s = '0' + s;
}
var myClock = document.getElementById("timer");
myClock.textContent = "" + year+ "-" + month + "-" + date + " " + h + ":" + m + ":" + s;  
// 2019-11-4 12:16:01  
myClock.innerHTML = "" + year+ "-" + month + "-" + date + " " + h + ":" + m + ":" + s;
setTimeout("renderTime()", 1000);


}
renderTime();