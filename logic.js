const y = document.querySelector('.container #game');
const z = document.querySelector('.container .countdown');
var message = document.querySelector('.greeting');
const newGame = document.querySelector('.newgame');
const bestTime = document.querySelector('.best-time');
const newTime = document.querySelector('.time');
const gameTitle = document.querySelector('.score h2');
const scoreList = document.querySelector('.scorelist');
var scoreRecord = JSON.parse(localStorage.getItem('score'));

document.querySelector('.gameover').style.display = 'none';
newTime.style.visibility = 'hidden';
bestTime.style.visibility = 'hidden';
newGame.style.display = 'none';
message.style.display = 'none';
y.style.display = 'none';
z.style.display = 'none';
const x = document.querySelector('.container .starting');

scoreList.innerHTML = '<p>'+scoreRecord[0]+' s</p>'+'<p>'+scoreRecord[1]+' s</p>'+'<p>'+scoreRecord[2]+' s</p>'+'<p>'+scoreRecord[3]+' s</p>'+'<p>'+scoreRecord[4]+' s</p>';
var uniValue = 1;
var yourScore = 0;
//NEWGAME 
function newgame() {
  window.location.reload();
}
//STARTING WHEN USER CLICKS START
function start() {
  x.style.display = 'none';
  scoreList.style.display = 'none';
  document.querySelector('.topscores').style.display = 'none';
  var pos = 4;
  var timer = setInterval(countDown , 1000);
//COUNTDOWN 3.....2......1......START.... 
function countDown() {
  newTime.style.visibility = 'visible';
  bestTime.style.visibility = 'visible';
  newGame.style.display = 'inherit';
  z.style.display = 'flex';
  gameTitle.style.visibility = 'hidden';
  y.style.display = 'inherit';
    if(pos == 1) { 
      document.body.onload = addElement;
      addElement();
      timerStart();
      gameRun();
      message.style.display = 'flex';
      z.style.display = 'none';
      clearInterval(timer);
    }
    else {
      pos--;
      z.innerHTML = pos;
    }
}  
/////////GAME RUN AFTER THE TIMER STARTS
function gameRun() {
  let gameValue = document.querySelectorAll('.game0 div'); //z

  for(var i = 0; i < gameValue.length ;i++) {
    gameValue[i].addEventListener('click',runIt);
  }
  var l = 0;
  var k = 0;
  var m = 1;
  function runIt(e) {
    if(Number(e.target.innerHTML) <= m && k <= 19 && Number(e.target.innerHTML) >= (m - 1)) {
        e.target.innerHTML = Number(e.target.innerHTML) + 20;
        m++ ;
        k++ ;
    }
    else if(k >= 20) {
      if(Number(e.target.innerHTML) <= m && l <= 19  && Number(e.target.innerHTML) >= (m-1) ) {
          e.target.style.display = 'none';
          m++;
          uniValue+=2;
          l++;
      }
      else{
          alert('NOT POSSIBLE');
      }
    }
    else {
        alert('NOT POSSIBLE');
    }
  }
} 
//TIMER STARTS WHEN THE COUNTDOWN COMPLETES
var Interval;
var score = JSON.parse(localStorage.getItem('score')) || []; //SCORE VARIABLE
var mostRecentScore; //SCORE MOST RECENT VARIABLE;
//TIMER START FUNCTION
function timerStart() {
  var seconds = 00;
  var milliseconds = 00;
  var appendMili = document.querySelector('.score .time #millisecond');
  var appendSeconds = document.querySelector('.score .time #second');
   
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
    if(uniValue === 41){
      document.querySelector('.gameover').style.display = 'inherit';    //GAME OVER DISPLAYED
      mostRecentScore = Number(appendSeconds.innerHTML+'.'+appendMili.innerHTML); //ADDED VAR TO READ THE STOPPED TIME
      clearInterval(Interval);
      /////////ADDED THE SCORE
      message.innerHTML = 'Your tapping time is '+ mostRecentScore+' s'; //DISPLAY TAPPING TIME OF PLAYER
      score.push(mostRecentScore);
      score.sort(function(a, b){return a-b});
      score.splice(10);
      localStorage.setItem('score',JSON.stringify(score));
    }
  }  
}
//DISPLAY THE BEST TIME
document.querySelector('.best-time p').innerHTML = score[0]+' s';
}
//DIV ELEMENT INSIDE ID:GAME FORMS WHEN THE DOCUMENT LOADS 
function addElement() {
  var currentDiv = document.getElementById('game');
  for(var i = 1; i < 21; i++) {
    var newDiv = document.createElement('div');
    var newDiv0 = document.createElement('div');
    var newDiv1 = document.createElement('div');
    var newContent1 = document.createTextNode(i);
    currentDiv.appendChild(newDiv);
    newDiv.appendChild(newDiv0);
    newDiv1.appendChild(newContent1);
    newDiv0.appendChild(newDiv1);
    newDiv.classList.add('game-square');
    newDiv0.classList.add('game0');
  }
  for (var i = y.children.length; i >= 0; i--) {
    y.appendChild(y.children[Math.random()*i|0]);
  }
}
