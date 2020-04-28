
const runTimer = () => {
    increment = setInterval(decrement, 1000);
};

const decrement = () => {
    timeLeft --;
    $('#time-left').html(`${timeLeft}s`);
    let progressBarWidth = timeLeft * $('#time-bar').width() / timeTotal;
    $('#time-bar').find('div').animate({ width: progressBarWidth }, timeLeft == timeTotal ? 0 : 1000, 'linear');
    if (timeLeft === -1){
        stopTimer();
        alert('time out');
        checkLives();
        changeLevel(currentLevel,currentLevel);
        $('#time-left').html('0s');
    }
};


const resetTimer = (timeGiven) => {
    timeLeft = timeGiven;
    timeTotal = timeGiven;
};


const stopTimer = () =>{
    clearInterval(increment);
};


const currentLevelTimer = () => {
    switch(currentLevel){
    case 1:
        return 15;
    case 2: 
        return 40;
    case 3: 
        return 35;
    case 4:
        return 30;
    case 5:
        return 50;
    case 6:
        return 30;
    case 7:
        return 60;
    case 8:
        return 30;
    case 9:
        return 90;
    case 10:
        return 60;
    default:
    }

};


