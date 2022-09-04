const display = document.getElementById('clock');
const audio = new Audio('Clock-sound-effect.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
const d =  new Date();
const hr = formatTime(d.getHours());
const m = formatTime(d.getMinutes());
const s = formatTime(d.getSeconds());

display.innerText= `${hr} : ${m} : ${s}`;
}

function formatTime(time){
    if (time < 10){
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value){
    alarmTime = value;
}

function setAlarm(){
    if(alarmTime){
        const current = new Date ();
        const timeToAlarm = new Date(alarmTime);

        if(timeToAlarm > current){
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        }
    }
}

function clearAlarm(){
    audio.pause();
    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}

setInterval(updateTime, 1000);
