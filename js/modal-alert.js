const displayAbout = () =>{
    $('#about-modal').css('display', 'block');
};

const closeAbout = () =>{
    $('#about-modal').css('display', 'none');
};

const displayAlert = () => {
    $('#modal').css('display', 'block');
};

const closeAlert = () => {
    $('#modal').css('display', 'none');
};

const setWinningAlertMessage = () => {
    let message = '';
    switch(currentLevel){
    case 0:
        message = 'What a great start! 🎉';
        break;
    case 1:
        message = 'You are correct! 👍';
        break;
    case 2: 
        message = 'You are smart! 🖖';           
        break;
    case 3: 
        message = '<p>Congratulations.</p> <p>You read instructions well. 📙 </p>';        
        break;
    case 4:
        message = 'You are genius! 📚';   
        break;
    case 5:
        message = '<p>You could survive a </p> <p>zombie 🧟 apocalypse.</p>'; 
        break;
    case 6:
        message = 'You should be proud of yourself. 😁'; 
        break;
    case 7:
        message = 'I bet you do crossword puzzles in ink. 🤓';  
        break;
    case 8:
        message = 'I won\'t tell anyone you cheated🤫';   
        break;
    case 9:
        message = 'You are good in treasure hunt! 📦';
        break;
    default:
    }

    $('#modal-content').html(message);
};

const setLosingAlertMessage = () => {
    let message = '<p>Ooops, please Try again! </p> <p>You lost a life &#128148;</p>';
    $('#modal-content').html(message);
    if (currentLevel!==0){
        changeLevel(currentLevel,currentLevel);
    }
};

const showWinningAlert = () => {
    playCorrectAudio();
    stopTimer();
    setWinningAlertMessage();
    displayAlert();
    $('#modal-close').on('click', () => {
        closeAlert();
        changeLevel(currentLevel,currentLevel+1);
        $('#modal-close').unbind();
    });
};

const showLosingAlert = () => {
    playWrongAudio();
    stopTimer();
    if (checkLives()){
        setLosingAlertMessage();
        displayAlert();
        $('#modal-close').on('click', () => {
            closeAlert();
            $('#modal-close').unbind();
        });
    }
};

const showTimeOut = () => {
    if (checkLives()){
        $('#modal-content').html('<p>Timeout ⏰! </p><br><p>You lost a life &#128148;.</p>');
        displayAlert();
    }
    $('#modal-close').on('click', () => {
        closeAlert();
        
        $('#time-left').html('0s');
        if (currentLevel !==0){
            changeLevel(currentLevel,currentLevel);
        }
    });
};

const restartGame = () => {
    $('#modal-close').html('Restart Game');
    displayAlert();
    $('#modal-close').on('click', () => {
        closeAlert();
        setTimeout(function (){
            location.reload();
        } , 400);
        $('#modal-close').unbind();
    });
};