//console.log('app.js is linked.');
//console.log($);

let counter = 8;
let timer;

const timeUp = () => {
    clearInterval(timer);
};

const countDown = () => {
    counter --;
    $('#time').html('Timer :' +counter);
    if (counter ===0 ) {
        timeUp();
        alert ('Time is Up');
    }
};

const runTimer = () => {
    timer = setInterval(countDown, 1000);
};

runTimer();