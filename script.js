
const time = document.querySelector('.stop .whole .watch .display');

const start_button = document.getElementById('start');
const stop_button = document.getElementById('stop');
const reset_button = document.getElementById('reset');

let seconds = 0;
let duration = null;




function clock()
{
    seconds ++;
    let secs = seconds % 60;
    let mins = Math.floor(seconds/60) % 60;
    let hrs = Math.floor(seconds/3600);
    

if(mins < 10)
    mins = '0'+mins;
if(hrs < 10)
    hrs = '0' + hrs;
if(secs < 10 )
    secs = '0' + secs;

    time.innerText = hrs+':'+mins+':'+secs;

    console.log(secs);

}

start_button.addEventListener('click', () => {
    if(duration)
        return;
    duration = setInterval(clock,1000);
})

stop_button.addEventListener('click', () => {
    clearInterval(duration);
    duration = null;
})

reset_button.addEventListener('click',() => {
    clearInterval(duration);
    duration = null;
    seconds = 0;
    time.innerText = '00:00:00';
}
    )