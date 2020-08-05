'use strict'

var userName = prompt('Hello, please type your name.');
alert('Hey ' + userName + ', welcome to my web game! I included some facts about me to answer the questions below. Have fun!')

document.getElementById('button1').addEventListener("click", function () {
  var answer1 = prompt('Type your answer, yes/y or no/n?');
  answer1 = answer1.toLowerCase();
  if (answer1 == 'yes' || answer1 == 'y') {
    alert('You are correct!');
    console.log('user got first question correct' + ' (' + answer1 + ')');
    document.getElementById('button1').innerHTML = 'CORRECT';
    document.getElementById('button1').style.backgroundColor = 'lightgreen';
  } else if (answer1 == 'no' || answer1 == 'n') {
    alert('Sorry Incorrect');
    console.log('user got first question wrong' + ' (' + answer1 + ')');
    document.getElementById('button1').innerHTML = 'WRONG';
    document.getElementById('button1').style.backgroundColor = 'red';
  } else {
    alert('please type a yes or no answer');
  }
});

document.getElementById('button2').addEventListener("click", function () {
  var answer2 = prompt('Type your answer, yes or no?');
  answer2 = answer2.toLowerCase();
  if (answer2 == 'no' || answer2 == 'n') {
    alert('You are correct!');
    console.log('user got first question correct' + ' (' + answer2 + ')');
    document.getElementById('button2').innerHTML = 'CORRECT';
    document.getElementById('button2').style.backgroundColor = 'lightgreen';
  } else if (answer2 == 'yes' || answer2 == 'y') {
    alert('Sorry Incorrect');
    console.log('user got first question wrong' + ' (' + answer2 + ')');
    document.getElementById('button2').innerHTML = 'WRONG';
    document.getElementById('button2').style.backgroundColor = 'red';
  } else {
    alert('please type a yes or no answer');
  }
});

document.getElementById('button3').addEventListener("click", function () {
  var answer3 = prompt('Type your answer, yes or no?');
  answer3 = answer3.toLowerCase();
  if (answer3 == 'yes' || answer3 == 'y') {
    alert('You are correct!');
    console.log('user got third question correct' + ' (' + answer3 + ')');
    document.getElementById('button3').innerHTML = 'CORRECT';
    document.getElementById('button3').style.backgroundColor = 'lightgreen';
  } else if (answer3 == 'no' || answer3 == 'n') {
    alert('Sorry Incorrect');
    console.log('user got third question wrong' + ' (' + answer3 + ')');
    document.getElementById('button3').innerHTML = 'WRONG';
    document.getElementById('button3').style.backgroundColor = 'red';
  } else {
    alert('please type a yes or no answer');
  }
});


document.getElementById('button4').addEventListener("click", function () {
  var answer4 = prompt('Type your answer, yes or no?');
  answer4 = answer4.toLowerCase();
  if (answer4 == 'no' || answer4 == 'n') {
    alert('You are correct!');
    console.log('user got fourth question correct' + ' (' + answer4 + ')');
    document.getElementById('button4').innerHTML = 'CORRECT';
    document.getElementById('button4').style.backgroundColor = 'lightgreen';
  } else if (answer4 == 'yes' || answer4 == 'y') {
    alert('Sorry Incorrect');
    console.log('user got fourth question wrong' + ' (' + answer4 + ')');
    document.getElementById('button4').innerHTML = 'WRONG';
    document.getElementById('button4').style.backgroundColor = 'red';
  } else {
    alert('please type a yes or no answer');
  }
});

document.getElementById('button5').addEventListener("click", function () {
  var answer5 = prompt('Type your answer, yes or no?');
  answer5 = answer5.toLowerCase();
  if (answer5 == 'yes' || answer5 == 'y') {
    alert('You are correct!');
    console.log('user got fifth question correct' + ' (' + answer5 + ')');
    document.getElementById('button5').innerHTML = 'CORRECT';
    document.getElementById('button5').style.backgroundColor = 'lightgreen';
  } else if (answer5 == 'no' || answer5 == 'n') {
    alert('Sorry Incorrect');
    console.log('user got fifth question wrong' + ' (' + answer5 + ')');
    document.getElementById('button5').innerHTML = 'WRONG';
    document.getElementById('button5').style.backgroundColor = 'red';
  } else {
    alert('please type a yes or no answer');
  }
});



document.getElementById('submitButton').addEventListener("click", function(){
  var color1 = document.getElementById('button1').style.backgroundColor;
  var color2 = document.getElementById('button2').style.backgroundColor;
  var color3 = document.getElementById('button3').style.backgroundColor;
  var color4 = document.getElementById('button4').style.backgroundColor;
  var color5 = document.getElementById('button5').style.backgroundColor;  
  if (color1,color2,color3,color4,color5 == 'lightgreen') {
    alert('Congrats ' + userName + '!! You got a 100%d! YOU WIN!!');
  } else {
    alert('Sorry ' + userName + ', YOU LOSE! You did not asnwer them all correcty. GAME OVER!!!');
  }
});

