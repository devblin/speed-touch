const y = document.querySelector('.container #game');
const z = document.querySelector('.container .countdown');
var message = document.querySelector('.greeting');
const newGame = document.querySelector('.newgame');
const bestTime = document.querySelector('.best-time');
const newTime = document.querySelector('.time');
const gameTitle = document.querySelector('.score h2');
const scoreList = document.querySelector('.scorelist');
const yourList = document.querySelector('.yourlist');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
//GRID SIZE 4x5 and 6x6;
var gridSize = 20;
var numbertoAdd = 20;
var modeValue = 20;

document.querySelector('.overallscore').style.display = 'none';
document.querySelector('.individualscore').style.display = 'none';
document.querySelector('#myscores').style.display = 'none';

var highScore = JSON.parse(localStorage.getItem('highScores')) || [];

var alertWrong = document.queryCommandValue('.greeting p');
document.querySelector('.starting').style.display = 'none';
document.querySelector('.gameover').style.display = 'none';
newTime.style.visibility = 'hidden';
bestTime.style.visibility = 'hidden';
newGame.style.display = 'none';
message.style.display = 'none';
y.style.display = 'none';
z.style.display = 'none';
const x = document.querySelector('.container .starting');
document.querySelector('#userDetails').style.display = 'none';

//TOP SCORES CLICKED
option2.onclick = function() {
  option1.style.display = 'none';
  option2.style.display = 'none';
  document.querySelector('#closeviewscore').style.display = 'none';
  document.querySelector('.overallscore').style.display = 'flex';
}
//MY SCORES CLICKED
document.querySelector('#option1').onclick = function() {
  option1.style.display = 'none';
  option2.style.display = 'none';
  document.querySelector('#myscores').style.display = 'flex';
}
//SOUNDS
//ERROR SOUND
let errorAudio = document.querySelector('#error');
//CORRECT SOUND
let correctAudio = document.querySelector('#correct');
//SHOWS OPTION MENU OF SCORES
document.querySelector('#showscore').onclick = function() {
  document.querySelector('.viewscore').style.display = 'flex';
  document.querySelector('#closeviewscore').style.display = 'flex';
  document.querySelector('#option1').style.display = 'flex';
  document.querySelector('#option2').style.display = 'flex';
  document.querySelector('.overallscore').style.display = 'none';
  document.querySelector('.individualscore').style.display = 'none';
}
//CLOSES OVERALL-SCORE MENU
document.querySelector('.overallscore').onclick = function() {
  document.querySelector(".overallscore").style.display = 'none';
  document.querySelector('.viewscore').style.display = 'none';
}
//CLOSES OPTION MENU OF SCORES
document.querySelector('#closeviewscore').onclick = function() {
  enteredName = '';
  document.querySelector('.viewscore').style.display = 'none';
  document.querySelector('#myscores').style.display = 'none';
}
//BACK TO MAIN MENU
document.querySelector('#back').onclick = function() {
  document.querySelector('.starting').style.display = 'none';
  document.querySelector('#userinput').value = null;
  document.querySelector(".home").style.display = 'flex';
}
document.querySelector('#back1').onclick = function() {
  document.querySelector('#userinput').value = null;
  document.querySelector(".home").style.display = 'flex';
  document.querySelector('.starting').style.display = 'none';
  document.querySelector('#userDetails').style.display = 'none';
}
//SEARCHING SCORES INDIVIDUALLY
var getUser;
var enteredName;
document.querySelector('#myscoreshow').onclick = function() {
  enteredName = document.querySelector('#searchusername').value;
    if(enteredName != '') {
      document.querySelector('#closeviewscore').style.display = 'none';
      document.querySelector('#myscores').style.display = 'none';
      document.querySelector('.viewscore').style.display = 'none';
      if(localStorage.getItem(enteredName) != null) {
        correctAudio.play();
        document.querySelector('#yourscore').style.display = 'flex';
        document.querySelector('.viewscore').style.display = 'flex';
        document.querySelector(".individualscore").style.display = 'flex';
        document.querySelector('.yourlist').style.display = 'flex';
        getUser = JSON.parse(localStorage.getItem(enteredName));
        for(var v = 0; v < getUser.length ; v++) {
          yourList.innerHTML += '<p>'+ getUser[v] +'</p>';
        }
      }
      else {
        document.querySelector('.viewscore').style.display = 'flex';
        document.querySelector('#yourscore').style.display = 'none';
        document.querySelector('.yourlist').style.display = 'flex';
        yourList.innerHTML = '<div>User Not Found</div>';
        errorAudio.play();
        document.querySelector('.individualscore').style.display = 'flex';
      }
    }
    else {
      alert('Enter a name');
    }
}
//CLOSE INDIVIDUAL SCORE MENU
document.querySelector('#closescore1').onclick = function() {
  document.querySelector('.viewscore').style.display = 'none';
  document.querySelector('#yourscore').style.display = 'none';
  document.querySelector('.yourlist').style.display = 'none';
  document.querySelector('#searchusername').value = '';
  yourList.innerHTML = '';
  document.querySelector('.individualscore').style.display = 'none';
}
//SCORE RECORD FOR NORMAL MODE ONLY
if(highScore != null) {
  scoreList.innerHTML = null;
  for(var scoreNum = 0; scoreNum < highScore.length; scoreNum++) {
    scoreList.innerHTML += '<p>'+ highScore[scoreNum].name + ' : ' + highScore[scoreNum].userScore + ' s</p>';
  }
}
else {
  scoreList.style.display = 'inherit';
}
//HACKERMODE INPUT ANY NUMBER GAME
var gridValue = 0;
document.querySelector('#startbutton0').onclick = function() {
  gridValue = Number(document.querySelector('#gridNumberInput').value);
  if(gridValue >= 20) {
    modeValue = gridValue - 20;
    start();
  }
  else {
    alert('Enter number above 20');
  }
}
//USER INPUT AREA FOR NORMAL MODE
//USERNAME
var userName;
function user() {
  document.querySelector('.home').style.display = 'none';
  document.querySelector('#userDetails').style.display = 'flex';
  document.querySelector('#usersubmit').onclick = function() {
    userName = document.querySelector('#userinput').value;
    if(userName != "" && isNaN(userName)) {
      document.querySelector('#userDetails').style.display = 'none';
      normal();
    }
    else {
      errorAudio.play();
      alert('Please Enter Your Name !');
    }
  }
}
//HACKER++
function hackermode() {
    window.location.assign("https://devblin.github.io/SpeedTouch/hackermode++.html");
}
//NORMAL MODE
function normal() {
  gridSize = 20;
  numbertoAdd = 20;
  modeValue = 20;
  document.querySelector(".home").style.display = 'none';
  document.querySelector('.starting #startingmsg').innerHTML = 'There are 40 numbers Tap in ascending order';
  document.querySelector('.starting #gridNumberInput').style.display = 'none';
  document.querySelector('.starting').style.display = 'flex';
  document.querySelector('#startbutton0').style.display = 'none';
  document.querySelector('#startbutton').style.display = 'flex';
  document.querySelector('#startbutton1').style.display = 'none';
}
 //HACKER MODE
function hacker() {
  document.querySelector('#startbutton').style.display = 'none';
  document.querySelector('.best-time').style.display = 'none';
  document.querySelector('#startbutton0').style.display = 'flex';
  document.querySelector('.home').style.display = 'none';
  document.querySelector('.starting #startingmsg').innerHTML = 'Enter Number above 20';
  document.querySelector('.starting #gridNumberInput').style.display = 'flex';
  document.querySelector('.starting').style.display = 'flex';
  document.querySelector('#startbutton1').style.display = 'none';
  // hackerLayout();
}
//HACKERMODE 2
function redhacker() {
  modeValue = 36;
  gridSize = 36;
  numbertoAdd = 36;
  gridValue = 72;
  document.querySelector(".home").style.display = 'none';
  document.querySelector('.best-time').style.display = 'none';
  document.querySelector('.starting #startingmsg').innerHTML = 'There are 72 numbers Tap in ascending order';
  document.querySelector('.starting #gridNumberInput').style.display = 'none';
  document.querySelector('.starting').style.display = 'flex';
  document.querySelector('#startbutton0').style.display = 'none';
  document.querySelector('#startbutton').style.display = 'none';
  document.querySelector('#startbutton1').style.display = 'flex';
}
document.querySelector('#startbutton1').onclick = function() {
  start();
}
//SCORE VARIABLES
var uniValue = 1;
var l = 0; //VAR FOR GAME RUN
var k = 0; //FOR GAME RUN
var m = 1; //FOR GAME RUN
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
  var divColor = document.querySelectorAll('.game0');
    for(var i = 0; i < gameValue.length ;i++) {
      gameValue[i].addEventListener('click',runIt);
      for(var t = 1; t < (gridSize+1) ; t++) {
        if(Number(divColor[i].innerText) == t) {
          divColor[i].firstElementChild.style.backgroundColor = 'rgb(255,'+String(200 - (t*2))+','+String(80-(t*2))+')';
        }
      }
    }
  function runIt(e) {
    if(Number(e.target.innerHTML) <= m && k <= (modeValue - 1) && Number(e.target.innerHTML) >= (m - 1)) {
        e.target.innerHTML = Number(e.target.innerHTML) + Number(numbertoAdd);
        e.target.style.backgroundColor = 'rgb(255,'+String(180 - 2*(k+1))+','+String(40-((k+1)*2))+')';
        correctAudio.play();
        m++ ;
        k++ ;
        uniValue += 1;
      }
    else if(k >= modeValue) {
      if(Number(e.target.innerHTML) <= m && l <= (Number(numbertoAdd)- 1)  && Number(e.target.innerHTML) >= (m - 1) ) {
        e.target.style.display = 'none';
        correctAudio.play();
        m++;
        uniValue += 1;
        l++;
      }
      else{
          errorAudio.play();
      }
    }
    else {
      errorAudio.play();
    }
  }
} 
//TIMER STARTS WHEN THE COUNTDOWN COMPLETES
var Interval;
var score = JSON.parse(localStorage.getItem(userName)) || []; //SCORE VARIABLE
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
    if(milliseconds < 9) {
      appendMili.innerHTML = "0" + milliseconds;
    }
    if (milliseconds > 9) {
      appendMili.innerHTML = milliseconds;
    }
    if (milliseconds > 99) {
      // console.log("second");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      milliseconds = 0;
      appendMili.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if(uniValue == 41 && modeValue == 20) {
      document.querySelector('.gameover').style.display = 'inherit';    //GAME OVER DISPLAYED
      mostRecentScore = Number(appendSeconds.innerHTML+'.'+appendMili.innerHTML); //ADDED VAR TO READ THE STOPPED TIME
      clearInterval(Interval);
      /////////ADDED THE SCORE
      highScore.push({'userScore':mostRecentScore,'name':userName});
      message.innerHTML = 'Your tapping time is '+ mostRecentScore+' s'; //DISPLAY TAPPING TIME OF PLAYER
      score.push(mostRecentScore);
      highScore.sort(function(a, b) { //SORTING HIGH SCORES BASED ON USERS SCORES
        return a.userScore - b.userScore;
      });
      score.sort(function(a, b){return a-b});  //SORTING USER'S INDIVIDUAL SCORES
      highScore.splice(5); //TO TAKE ONLY TOP FIVE SCORES
      score.splice(5); //TO TAKE ONLY TOP FIVE SCORES OF USER
      localStorage.setItem('highScores',JSON.stringify(highScore));
      localStorage.setItem(userName,JSON.stringify(score));
    }
    if(uniValue == (gridValue + 1) && modeValue != 20) {
      document.querySelector('.gameover').style.display = 'inherit';
      mostRecentScore = Number(appendSeconds.innerHTML+'.'+appendMili.innerHTML);
      clearInterval(Interval);
      message.innerHTML = 'Your tapping time is '+ mostRecentScore+' s'; //DISPLAY TAPPING TIME OF PLAYER
    }
  }  
}
//DISPLAY THE BEST TIME
if(highScore != null) {
  document.querySelector('.best-time p').innerHTML = highScore[0].name + ' : ' + highScore[0].userScore +' s';
}
}
//DIV ELEMENT INSIDE ID:GAME FORMS WHEN THE DOCUMENT LOADS 
function addElement() {
  var currentDiv = document.getElementById('game');
  for(var i = 1; i < (Number(gridSize)+1); i++) {
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
  //RESPONSIVENESSS FOR 6 X 6 GRID
  if(gridSize == 36) {
    for(var c = 0; c < 36; c++) {
    document.querySelectorAll('.game-square')[c].style.width = '83px';
    document.querySelectorAll('.game-square')[c].style.height = '83px';
    }
    var smallest = window.matchMedia('(max-width: 320px)');
    var large = window.matchMedia('(max-width: 425px)');
    function width320(d) {
      if(d.matches) {
        document.querySelector('#game').style.height = '275px';
        document.querySelector('#game').style.width = '275px';
        for(var a = 0; a < 36; a++) {
          document.querySelectorAll('.game-square')[a].style.width = '45px';
          document.querySelectorAll('.game-square')[a].style.height = '45px';
        }
      }
      else {
        document.querySelector('#game').style.height = '325px';
        document.querySelector('#game').style.width = '325px';
        for(var a = 0; a < 36; a++) {
          document.querySelectorAll('.game-square')[a].style.width = '54px';
          document.querySelectorAll('.game-square')[a].style.height = '54px';
        }
      }
    }
    width320(smallest);
    smallest.addListener(width320);
    function width425(w) {
      if(w.matches) {
        document.querySelector('#game').style.height = '325px';
        document.querySelector('#game').style.width = '325px';
        for(var a = 0; a < 36; a++) {
          document.querySelectorAll('.game-square')[a].style.width = '54px';
          document.querySelectorAll('.game-square')[a].style.height = '54px';
        }
      }
      else {
        document.querySelector('#game').style.height = '500px';
        document.querySelector('#game').style.width = '500px';
        for(var a = 0; a < 36; a++) {
          document.querySelectorAll('.game-square')[a].style.width = '83px';
          document.querySelectorAll('.game-square')[a].style.height = '83px';
        }
      }
    }
    width425(large);
    large.addListener(width425);
  }
  for (var i = y.children.length; i >= 0; i--) {
    y.appendChild(y.children[Math.random()*i|0]);
  }
}
