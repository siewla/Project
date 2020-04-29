
const runTimer = () => {
    increment = setInterval(decrement, 1000);
};

const decrement = () => {
    timeLeft --;
    $('#time-left').html(`${timeLeft}s`);
    let progressBarWidth = timeLeft * $('#time-bar').width() / timeTotal;
    $('#time-bar').find('div').animate({ width: progressBarWidth }, timeLeft == timeTotal ? 0 : 1000, 'linear');
    if (timeLeft === 0){
        stopTimer();
        showTimeOut();
    }
};


const resetTimer = (timeGiven) => {
    timeLeft = timeGiven;
    timeTotal = timeGiven;
};


const stopTimer = () =>{
    clearInterval(increment);
};

const currentLevelTimer = (currentLevel) => {
    switch(currentLevel){
    case 1:
        return 16;
    case 2: 
        return 31;
    case 3: 
        return 41;
    case 4:
        return 31;
    case 5:
        return 51;
    case 6:
        return 31;
    case 7:
        return 41;
    case 8:
        return 31;
    case 9:
        return 61;
    case 10:
        return 51;
    default:
    }

};


