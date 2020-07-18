const presentation = document.querySelector('.presentation');
const leftWing = document.querySelector('.leftWing');
const rightWing = document.querySelector('.rightWing');
const letterU = document.querySelector('.u-letter');
const letterT = document.querySelector('.triangle');
const letterPi = document.querySelector('.pi-letter');
const header = document.querySelector('header');

const container = document.querySelector('.container');
const text = document.querySelector('#text');


const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

presentation.addEventListener('click', enterTheVoid);
function enterTheVoid() {
    leftWing.style.animation = 'moveToLeft 2.8s ease forwards';
    rightWing.style.animation = 'moveToRight 2.8s ease forwards';
    letterU.style.animation = 'moveToLeftLetter 1.8s ease forwards';
    letterT.style.animation = 'moveToLeftLetter 1.8s ease forwards';
    letterPi.style.animation = 'moveToRightLetter 1.8s ease forwards';
    header.style.visibility = 'visible';
    header.style.animation = 'intro 2.8s ease forwards';
    
}


/*breathAnimation();*/

function breathAnimation () {
    text.innerHTML = 'New Era!';
    container.className = 'container grow';
    
    setTimeout(() => {
        text.innerText = 'Comming soon...'
        
        setTimeout( () => {
            text.innerText = 'Unija projekt'
            container.className = 'container shrink'
        }, holdTime)
    }, breathTime)
}

setInterval(breathAnimation, totalTime);











