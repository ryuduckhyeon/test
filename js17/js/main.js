function time(){
    let webYear = document.querySelector(".web_year");
    let webMonth = document.querySelector(".web_month");
    let webDate = document.querySelector(".web_date");
    let webHour = document.querySelector(".web_hour");
    let webMin = document.querySelector(".web_min");
    let webSec = document.querySelector(".web_sec");
    let webMsec = document.querySelector(".web_msec");
    console.log(webHour, webMin, webSec, webMsec);
    let date = new Date();
    console.log(date);
    let year = date.getFullYear();
    console.log(year);
    webYear.innerHTML = year;
    let month = date.getMonth() + 1;
    console.log(month);
    webMonth.innerHTML = month;
    let day = date.getDate();
    console.log(day);
    webDate.innerHTML = day;
    let hour = date.getHours();
    console.log(hour);
    let dhour = dig(hour);
    webHour.innerHTML = dhour;
    let min = date.getMinutes();
    console.log(min);
    let dmin = dig(min);
    webMin.innerHTML = dmin;
    let second = date.getSeconds();
    console.log(second);
    let dsec = dig(second);
    webSec.innerHTML = dsec;
    let msec = date.getMilliseconds();
    console.log(msec);
    msec = Math.floor(msec/10)
    let dmsec = dig(msec);
    webMsec.innerHTML = dmsec;
    function dig(X){
        if(X<10){
            return'0'+X;
        }else{
            return X;
        }
    }
}
setInterval(function(){
    time();
},1)