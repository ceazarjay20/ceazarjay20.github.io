const nextButton = document.querySelector('.nextButton');
const backButton = document.querySelector('.backButton');
const vidButton = document.querySelector('#videoButton');
const audio = document.querySelector('#myAudio');
const clickMe = document.querySelector('#clickMe');
const main = document.querySelector('.main');
const body = document.body.innerHTML;

let dimensionSize = window.matchMedia("(max-width: 480px)");

function dimensionListener(dimensionSize){
    if(dimensionSize.matches){
        nextButton.addEventListener('click', nextButtonStepsMobile);
        backButton.addEventListener('click', backButtonStepsMobile);
    }else{
        nextButton.addEventListener('click', nextButtonStepsDesktop);
        backButton.addEventListener('click', backButtonStepsDesktop);
    }
}

dimensionListener(dimensionSize);
dimensionSize.addListener(dimensionListener);

let buttonCounter = 0;
function nextButtonStepsDesktop(){
    if (buttonCounter == 0){
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {  
            document.documentElement.requestFullScreen();  
            } else if (document.documentElement.mozRequestFullScreen) {  
            document.documentElement.mozRequestFullScreen();  
            } else if (document.documentElement.webkitRequestFullScreen) {  
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
            }  
        } else {  
            if (document.cancelFullScreen) {  
            document.cancelFullScreen();  
            } else if (document.mozCancelFullScreen) {  
            document.mozCancelFullScreen();  
            } else if (document.webkitCancelFullScreen) {  
            document.webkitCancelFullScreen();  
            }  
        }
        document.body.style.backgroundAttachment = 'none';
        document.body.style.backgroundImage = 'url("/images/bgImage.jpg")';
        document.body.style.backgroundSize = 'cover';
        clickMe.style.display = 'none';
        main.style.marginTop = '2%';
        document.getElementById('nextArrowButton').style.marginLeft = '0';
        document.getElementById('nextArrowButton').style.marginTop = '0';
        document.getElementById('nextArrowButton').style.marginRight = '45%';
        document.getElementById('nextArrowButton').style.float = 'right';
    }
    if(buttonCounter == 1){
        document.getElementById('nextArrowButton').style.marginLeft = '0';
        document.getElementById('nextArrowButton').style.marginRight = '30%';
        document.getElementById('backArrowButton').style.display = 'block';
    }
    if(buttonCounter == 17){
        document.getElementById('nextArrowButton').style.display = 'none';
        document.getElementById('backArrowButton').style.marginLeft = '45%';
        document.getElementById('videoButton').style.display = 'block';
        audio.pause();
    }
    if(buttonCounter != 17){
        audio.play();
        audio.volume = 0.25;
        audio.loop = true;
    }
    document.querySelectorAll('.message p')[buttonCounter].style.display = 'none';
    document.querySelectorAll('.message p')[buttonCounter+1].style.display = 'block';
    buttonCounter++;
}

function backButtonStepsDesktop(){
    buttonCounter--;
    if(buttonCounter == 1){
        document.getElementById('nextArrowButton').style.marginRight = '45%';
        document.getElementById('backArrowButton').style.display = 'none';
    }

    if(buttonCounter == 17){
        document.getElementById('nextArrowButton').style.display = 'block';
        document.getElementById('backArrowButton').style.marginLeft = '30%';
        document.getElementById('videoButton').style.display = 'none';
    }
    
    document.querySelectorAll('.message p')[buttonCounter+1].style.display = 'none';
    document.querySelectorAll('.message p')[buttonCounter].style.display = 'block';
    audio.play();
}

function nextButtonStepsMobile(){
    if (buttonCounter == 0){
        document.body.style.backgroundAttachment = 'none';
        document.body.style.backgroundImage = 'url("/images/bgImage_m.jpg")';
        document.body.style.backgroundSize = 'cover';
        clickMe.style.display = 'none';
        main.style.marginTop = '5%';
        document.getElementById('nextArrowButton').style.marginLeft = '0';
        document.getElementById('nextArrowButton').style.marginTop = '0';
        document.getElementById('nextArrowButton').style.marginRight = '40%';
        document.getElementById('nextArrowButton').style.float = 'right';
    }
    if(buttonCounter == 1){
        document.getElementById('nextArrowButton').style.marginLeft = '0';
        document.getElementById('nextArrowButton').style.marginRight = '20%';
        document.getElementById('backArrowButton').style.display = 'block';
    }
    if(buttonCounter == 17){
        document.getElementById('nextArrowButton').style.display = 'none';
        document.getElementById('backArrowButton').style.marginLeft = '40%';
        document.getElementById('backArrowButton').style.marginTop = '-2%';
        document.getElementById('videoButton').style.display = 'block';
        audio.pause();
    }
    if(buttonCounter != 17){
        audio.play();
        audio.volume = 0.25;
        audio.loop = true;
    }
    document.querySelectorAll('.message p')[buttonCounter].style.display = 'none';
    document.querySelectorAll('.message p')[buttonCounter+1].style.display = 'block';
    buttonCounter++;
}

function backButtonStepsMobile(){
    buttonCounter--;
    if(buttonCounter == 1){
        document.getElementById('nextArrowButton').style.marginRight = '40%';
        document.getElementById('backArrowButton').style.display = 'none';
    }

    if(buttonCounter == 17){
        document.getElementById('nextArrowButton').style.display = 'block';
        document.getElementById('backArrowButton').style.marginLeft = '20%';
        document.getElementById('backArrowButton').style.marginTop = '0';
        document.getElementById('videoButton').style.display = 'none';
    }
    
    document.querySelectorAll('.message p')[buttonCounter+1].style.display = 'none';
    document.querySelectorAll('.message p')[buttonCounter].style.display = 'block';
    
    audio.play();
}