const startButton = document.querySelector('[data-action=start]');
const stopButton= document.querySelector('[data-action=stop]');
const resetButton = document.querySelector('[data-action=reset]');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

let timerTime = 00;
let interval;
let counting = false;




//functions
function keepzero(num){
   return(num < 10) ? '0' + num  : num;
}

function startTimer(){
    if (counting)return;
    interval = setInterval(incrementTimer,1000);
    counting = true;
    }


function stopTimer (){
    if (!counting)return;
    clearInterval(interval);
    counting = false;

}
function resetTimer(){
    stopTimer()

    timerTime = 0;
    minutes.innerText =keepzero(00);
    seconds.innerText=keepzero(00);

}
function incrementTimer(){
    timerTime++;
    const numOfminutes = Math.floor(timerTime/60);
    const numOfseconds = timerTime % 60;
    // console.log({numOfminutes,numOfseconds});
    seconds.innerText =keepzero(numOfseconds);
    minutes.innerText = keepzero(numOfminutes);
}





// add eventlisteners //
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);