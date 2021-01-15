'use strict'


var userName = prompt('Hello, please type your name.');
alert('Hey ' + userName + ', welcome to my web game! I included some facts about me to answer the questions below. Have fun!')

var f = 0;

function totalCorrectAnswers() {
    alert(`Great job ${userName}, You got ${f} right! Thanks for playing my game! `)
}

function questionOne() {
    document.getElementById('button1').addEventListener("click", function() {
        var answer1 = prompt('Type your answer, yes/y or no/n?');
        answer1 = answer1.toLowerCase();
        if (answer1 == 'yes' || answer1 == 'y') {
            alert('You are correct!');
            console.log('user got first question correct' + ' (' + answer1 + ')');
            document.getElementById('button1').innerHTML = 'CORRECT';
            document.getElementById('button1').style.backgroundColor = 'lightgreen';
            f++;
        } else if (answer1 == 'no' || answer1 == 'n') {
            alert('Sorry Incorrect');
            console.log('user got first question wrong' + ' (' + answer1 + ')');
            document.getElementById('button1').innerHTML = 'WRONG';
            document.getElementById('button1').style.backgroundColor = 'red';
        } else {
            alert('please type a yes or no answer');
        }
    });
}
questionOne();

function questionTwo() {
    document.getElementById('button2').addEventListener("click", function() {
        var answer2 = prompt('Type your answer, yes or no?');
        answer2 = answer2.toLowerCase();
        if (answer2 == 'no' || answer2 == 'n') {
            alert('You are correct!');
            console.log('user got first question correct' + ' (' + answer2 + ')');
            document.getElementById('button2').innerHTML = 'CORRECT';
            document.getElementById('button2').style.backgroundColor = 'lightgreen';
            f++;
        } else if (answer2 == 'yes' || answer2 == 'y') {
            alert('Sorry Incorrect');
            console.log('user got first question wrong' + ' (' + answer2 + ')');
            document.getElementById('button2').innerHTML = 'WRONG';
            document.getElementById('button2').style.backgroundColor = 'red';
        } else {
            alert('please type a yes or no answer');
        }
    });
}
questionTwo();

function questionThree() {
    document.getElementById('button3').addEventListener("click", function() {
        var answer3 = prompt('Type your answer, yes or no?');
        answer3 = answer3.toLowerCase();
        if (answer3 == 'yes' || answer3 == 'y') {
            alert('You are correct!');
            console.log('user got third question correct' + ' (' + answer3 + ')');
            document.getElementById('button3').innerHTML = 'CORRECT';
            document.getElementById('button3').style.backgroundColor = 'lightgreen';
            f++;
        } else if (answer3 == 'no' || answer3 == 'n') {
            alert('Sorry Incorrect');
            console.log('user got third question wrong' + ' (' + answer3 + ')');
            document.getElementById('button3').innerHTML = 'WRONG';
            document.getElementById('button3').style.backgroundColor = 'red';
        } else {
            alert('please type a yes or no answer');
        }
    });
}
questionThree();

function questionFour() {
    document.getElementById('button4').addEventListener("click", function() {
        var answer4 = prompt('Type your answer, yes or no?');
        answer4 = answer4.toLowerCase();
        if (answer4 == 'no' || answer4 == 'n') {
            alert('You are correct!');
            console.log('user got fourth question correct' + ' (' + answer4 + ')');
            document.getElementById('button4').innerHTML = 'CORRECT';
            document.getElementById('button4').style.backgroundColor = 'lightgreen';
            f++;
        } else if (answer4 == 'yes' || answer4 == 'y') {
            alert('Sorry Incorrect');
            console.log('user got fourth question wrong' + ' (' + answer4 + ')');
            document.getElementById('button4').innerHTML = 'WRONG';
            document.getElementById('button4').style.backgroundColor = 'red';
        } else {
            alert('please type a yes or no answer');
        }
    });
}
questionFour();

function questionFive() {
    document.getElementById('button5').addEventListener("click", function() {
        var answer5 = prompt('Type your answer, yes or no?');
        answer5 = answer5.toLowerCase();
        if (answer5 == 'yes' || answer5 == 'y') {
            alert('You are correct!');
            console.log('user got fifth question correct' + ' (' + answer5 + ')');
            document.getElementById('button5').innerHTML = 'CORRECT';
            document.getElementById('button5').style.backgroundColor = 'lightgreen';
            f++;
        } else if (answer5 == 'no' || answer5 == 'n') {
            alert('Sorry Incorrect');
            console.log('user got fifth question wrong' + ' (' + answer5 + ')');
            document.getElementById('button5').innerHTML = 'WRONG';
            document.getElementById('button5').style.backgroundColor = 'red';
        } else {
            alert('please type a yes or no answer');
        }
    });
}
questionFive();





function guessNumber() {
    document.getElementById('bonusButton').addEventListener('click', function() {
        for (var i = 0; i <= 3; i++) {
            var bonusGuess = 5;
            var userGuess = prompt('Guess a number from 1 to 10');
            userGuess = parseInt(userGuess);
            if (userGuess === bonusGuess) {
                alert(userGuess + ' is Correct!! You are amazing!');
                document.getElementById('bonusButton').style.backgroundColor = 'lightgreen';
                document.getElementById('bonusButton').innerHTML = 'CORRECT';
                f++;
                i = 4;
            } else if (userGuess < 5) {
                alert('You are too low, try again!');
            } else if (userGuess > 5) {
                alert('You are too high, guess again!');
            } else {
                alert('Only enter numbers 1 thru 10');
            }
            if (i === 3) {
                alert('Sorry, number was 5. GAME OVER!!');
                document.getElementById('bonusButton').style.backgroundColor = 'red';
                document.getElementById('bonusButton').innerHTML = 'WRONG';

            }
        }
    });
}

guessNumber();

// My top 10 favorite foods (INCORRECT CODE!!)

function myFoods() {
    document.getElementById('foodButton').addEventListener('click', function() {
        var myFoods = ['sushi', 'bbq', 'steak'];

        var count = 0;

        while (count < 6) {
            var userFoods = prompt('Enter your 1st choice of my top 3 foods');
            var foundAnswer = false;
            for (var i = 0; i < myFoods.length; i++) {
                //userFoods = userFoods.toLowerCase();
                if (userFoods.toLowerCase() === myFoods[i]) {
                    foundAnswer = true;
                    alert('You got a match! My top 3 foods are: Sushi, Bbq and Steak!');
                    count = 8;
                    document.getElementById('foodButton').style.backgroundColor = 'lightgreen';
                    f++;
                    break;
                }
                if (count === 5 && userFoods.toLowerCase() !== myFoods[i]) {
                    alert('Sorry, you are out of tries! GAME OVER! My top 3 foods are: Sushi, Bbq and Steak');
                    document.getElementById('foodButton').style.backgroundColor = 'red';
                    count = 8;
                    break;
                }
            }
            if (foundAnswer === false) {
                alert('Not a match');
                count++;
            }
        }
    });
}
myFoods();

function finalScore() {
    document.getElementById('submitButton').addEventListener('click', function() {
        if (f === 7 || f >= 7) {
            alert(`Amazing job ${userName}, You got (${f} out of 7)! YOU WIN!!`);
            document.getElementById('submitButton').style.backgroundColor = 'lightgreen';
            document.body.style.backgroundImage = "url('./images/pic2.jpg')";
            document.querySelector('body').style.color = '#FFB6C1';
        } else {
            alert(`Sorry ${userName}, you got (${f} out of 7). YOU LOSE! GAME OVER!!! `);
            document.getElementById('submitButton').style.backgroundColor = 'red';
            document.body.style.backgroundImage = "url('./images/pic3.jpg')";
        }
    });
}

finalScore();