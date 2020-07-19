const presentation = document.querySelector('.presentation');
const leftWing = document.querySelector('.leftWing');
const rightWing = document.querySelector('.rightWing');
const letterU = document.querySelector('.u-letter');
const letterT = document.querySelector('.triangle');
const letterPi = document.querySelector('.pi-letter');
const header = document.querySelector('header');

const container = document.querySelector('.container');
const text = document.querySelector('.text');


const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

let mql = window.matchMedia('(max-device-width: 480px)');

if (mql.matches) {
    presentation.addEventListener('click', enterTheVoid_Min);
}else{
    presentation.addEventListener('click', enterTheVoid);
}



function enterTheVoid() {
    
    leftWing.style.animation = 'moveToLeft 2.8s ease forwards';
    rightWing.style.animation = 'moveToRight 2.8s ease forwards';
    letterU.style.animation = 'moveToLeftLetter 1.8s ease forwards';
    letterT.style.animation = 'moveToLeftLetter 1.8s ease forwards';
    letterPi.style.animation = 'moveToRightLetter 1.8s ease forwards';
    
   
    presentation.style.animation = 'wenish 2.9s forwards';
    
    header.style.visibility = 'visible';
    header.style.animation = 'intro 2.8s forwards'; 
    breathAnimation();
    setInterval(breathAnimation, totalTime);
}


function enterTheVoid_Min() {
    leftWing.style.animation = 'moveToLeft 2.8s forwards';
    rightWing.style.animation = 'moveToRight 2.8s forwards';
    letterU.style.animation = 'moveToLeftLetter_Min 1.8s forwards';
    letterT.style.animation = 'moveToLeftLetter_Min 1.8s forwards';
    letterPi.style.animation = 'moveToRightLetter_Min 1.8s forwards';
    presentation.style.animation = 'wenish 2.9s forwards';
    
    header.style.visibility = 'visible';
    header.style.animation = 'intro 2.8s forwards'; 
    setTimeout(() => {
        presentation.remove();
        leftWing.remove();
        rightWing.remove();
        letterU.remove();
        letterPi.remove();
        letterT.remove();
        breathAnimation();
        setInterval(breathAnimation, totalTime);
                }, 2800);
        
}




function breathAnimation () {
    
    setTimeout(() => {
        
        text.innerHTML = 'New era!';

        container.className = 'container grow';

        setTimeout(() => {

            text.innerText = 'Coming soon...';

            setTimeout( () => {

                text.innerText = 'Unija projekt';

                container.className = 'container shrink';
                
            }, holdTime)
        }, breathTime)
    }, 3500)
    
}













