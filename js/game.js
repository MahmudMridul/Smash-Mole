const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
var timeleft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeleft.textContent;
var hitPos = 0;
function randomSquare()
{
    squares.forEach(className =>
    {
        className.classList.remove('mole');
    });
    let randomPos = squares[Math.floor(Math.random()*9)];
    randomPos.classList.add('mole');

    hitPos = randomPos.id;
}


squares.forEach(id=>
{
    id.addEventListener('mouseup', ()=>
    {
        if(id.id==hitPos)
        {
            result = result+1;
            score.textContent = result;
        }
    });
});


function moveMole()
{
    let timerID = null;
    timerID = setInterval(randomSquare,500);
}

moveMole();

function countDown()
{
    currentTime--;
    timeleft.textContent = currentTime;
    //console.log(currentTime);
    if(currentTime==0)
    {
        clearInterval(timerID);
        document.getElementById('gameover').innerHTML = "Game Over! Your Score: "+result;
    }
}

let timerID = setInterval(countDown,500);
