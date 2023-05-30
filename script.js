
const showTime = () => {

const time = document.querySelector('.time')
const today = new Date()
const hr = today.getHours()
const mins  = today.getMinutes()
const sec = today.getSeconds()
console.log(sec);
console.log(hr);
console.log(mins);
if ( sec < 10 && mins < 10){
    time.innerHTML = `${hr}:0${mins}:0${sec}`
}
else if (sec < 10){
    time.innerHTML = `${hr}:${mins}:0${sec}`
}
else if (mins < 10){
    time.innerHTML = `${hr}:0${mins}:${sec}`
}
else{
    time.innerHTML = `${hr}:${mins}:${sec}`
}
}

setInterval(showTime , 1000);