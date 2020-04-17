const y = document.querySelector('.container #game');
const z = document.querySelector('.container .countdown');
const message = document.querySelector('.greeting');
const newGame = document.querySelector('.newgame');
const bestTime = document.querySelector('.best-time');
const newTime = document.querySelector('.time');
const gameTitle = document.querySelector('.score h2');

newTime.style.visibility = 'hidden';
bestTime.style.visibility = 'hidden';
newGame.style.display = 'none';
message.style.display = 'none';
y.style.display = 'none';
z.style.display = 'none';

const x = document.querySelector('.container .starting');

// STARTING FUNCTION WHEN THE USER CLICKS START GAME

function start(){
   x.style.display = 'none';
   var pos = 4;
   var timer = setInterval(countDown,1000);
   function countDown(){
    newTime.style.visibility = 'visible';
    bestTime.style.visibility = 'visible';
    newGame.style.display = 'inherit';
    z.style.display = 'flex';
    gameTitle.style.visibility = 'hidden';
    y.style.display = 'inherit';
       if(pos == 1){
           addElement();
           timerStart();
           message.style.display = 'flex';
           z.style.display = 'none';
           clearInterval(timer);
           gameRun();
       }
       else{
           pos--;
           z.innerHTML = pos;
       }
   }

    //    TIMER FUNCTION WHEN THE GAME STARTS 
   function timerStart(){
    var seconds = 00;
    var milliseconds = 00;
    var appendMili = document.querySelector('.score .time #millisecond');
    var appendSeconds = document.querySelector('.score .time #second');
    var Interval ;

    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    function startTimer () {
      milliseconds++;
      if(milliseconds < 9){
        appendMili.innerHTML = "0" + milliseconds;
      }
      if (milliseconds > 9){
        appendMili.innerHTML = milliseconds;
      }
      if (milliseconds > 99) {
        console.log("second");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        milliseconds = 0;
        appendMili.innerHTML = "0" + 0;
      }
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    }
    }
    //////////////////////////////////////////////////////////////////////////////
    document.body.onload = addElement;
    function addElement() {
        var currentDiv = document.getElementById('game');
        for(var i = 1; i < 21; i++) {
                var newDiv = document.createElement('div');
                var newDiv0 = document.createElement('div');
                var newDiv1 = document.createElement('div');
                var newDiv2 = document.createElement('div');
                var newContent1 = document.createTextNode(i);
                var newContent2 = document.createTextNode(20+i);
                currentDiv.appendChild(newDiv);
                newDiv.appendChild(newDiv0);
                newDiv1.appendChild(newContent1);
                newDiv2.appendChild(newContent2);
                newDiv0.appendChild(newDiv1);
                newDiv0.appendChild(newDiv2);
                newDiv.classList.add('game-square');
                newDiv1.classList.add(String(i));
                newDiv2.classList.add(String(20+i));
        }
        for (var i = y.children.length; i >= 0; i--) {
            y.appendChild(y.children[Math.random()*i|0]);
        }
    }

}
