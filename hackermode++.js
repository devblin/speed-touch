let message = document.querySelector('#greeting');
//ERROR SOUND
let errorAudio = document.querySelector('#error');
//CORRECT SOUND
function newgame() {
    window.location.reload();
}
let correctAudio = document.querySelector('#correct');
var uniValue = 1;
var l = 0; //VAR FOR GAME RUN
var k = 0; //FOR GAME RUN
var m = 1; //FOR GAME RUN
function start() {
var pos = 4;
var timer = setInterval(countDown , 1000);
function countDown() {
    document.querySelector('#gameover').style.fontSize = '300px';
    document.querySelector('.score h2').style.display = 'none';
    document.querySelector('.startpage').style.display = 'none';
    document.querySelector('.time').style.cssText = 'display:flex !important';
    document.querySelector('.best-time').style.cssText = 'display:flex !important';
    document.querySelector('#gameover').style.display = 'flex';
      if(pos == 1) {
        gameRun();
        timerStart();
        document.querySelector('#gameover').style.display = 'none';
        clearInterval(timer);
        document.querySelector('#gameover').style.fontSize = '50px';
        document.querySelector('#gameover').innerHTML = 'Game Over';
        message.style.display = 'flex';
      }
      else {
        pos--;
        document.querySelector('#gameover').innerHTML = pos;
    }
    function gameRun() {
        document.querySelector('.score h2').style.display = 'none';
        document.querySelector('.startpage').style.display = 'none';
        document.querySelector('.menu').style.display = 'flex';
        document.querySelector('#b').style.visibility = 'visible';
        document.querySelector('#f').style.visibility = 'visible';
        document.querySelector('#a').style.visibility = 'visible';
        document.querySelector('#e').style.visibility = 'visible'; 

        var listVal = document.querySelectorAll('.list-inline li');
        for(var i = 0; i < listVal.length ; i++) {
            listVal[i].addEventListener('click',runIt);
        }
        Array.from(listVal);
        function runIt(e) {
                if(Number(e.target.innerHTML) <= m && Number(e.target.innerHTML) >= (m - 1)) {
                    e.target.style.visibility = 'hidden';
                    for(var j = 0; j < listVal.length ; j++) {
                        if(Number(e.target.innerHTML) == Number(listVal[j].innerHTML)) {
                            listVal[j].style.visibility = 'hidden'
                        }
                    }
                    correctAudio.play();
                    m++ ;
                    uniValue += 1;
                  }
                else {
                  errorAudio.play();
                }
            }
    }
var Interval;
var mostRecentScore; //SCORE MOST RECENT VARIABLE;
// //TIMER START FUNCTION
function timerStart() {
  var seconds = 00;
  var milliseconds = 00;
  var appendMili = document.querySelector('.score .time #millisecond');
  var appendSeconds = document.querySelector('.score .time #second');
  Interval = setInterval(startTimer, 10);
  function startTimer () {
    milliseconds++;
    if(milliseconds < 9) {
      appendMili.innerHTML = "0" + milliseconds;
    }
    if (milliseconds > 9) {
      appendMili.innerHTML = milliseconds;
    }
    if (milliseconds > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      milliseconds = 0;
      appendMili.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if(uniValue == 21) {
      mostRecentScore = Number(appendSeconds.innerHTML+'.'+appendMili.innerHTML);
      clearInterval(Interval);
      document.querySelector('#gameover').style.display = 'flex';
      message.innerHTML = 'Your tapping time is '+ mostRecentScore+' s';
    }
  }  
}
}
}