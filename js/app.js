let currentLevel=0;
let remainingTips=5;
let remainingLives=5;
let tipsIndex = [];
let timeLeft = 15;
let timeTotal = 15;
let increment;

const displayLevel = (level) => {
    switch(level){
    case 1:
        level1();
        break;
    case 2: 
        level2();              
        break;
    case 3: 
        level3();     
        break;
    case 4:
        level4();
        break;
    case 5:
        level5();
        break;
    case 6:
        level6();
        break;
    case 7:
        level7();
        break;
    case 8:
        level8();
        break;
    case 9:
        level9();
        break;
    case 10:
        level10();
        break;
    default:
    } 
    $(`.level-${level}`).css('display','block');
};

const displayNoneLevel = (level) => {   
    $(`.level-${level}`).css('display','none');
};

const changeLevel = (currentLevel, nextLevel) => {
    displayNoneLevel(currentLevel);
    $('.game').empty();
    displayLevel(nextLevel);
    currentLevel = nextLevel;
    activateLevelButton(currentLevel);
    stopTimer();
    $('.timer').css('display','flex');
    resetTimer(currentLevelTimer(currentLevel));
    runTimer();
};

const activateLevelButton = (currentLevel) =>{
    if (currentLevel !== 1){
        $('.level-button').eq(currentLevel-2).css('opacity','0.6');
    }
    $('.level-button').eq(currentLevel-1).prop('disabled',false);
    $('.level-button').eq(currentLevel-1).css('background-color','green');
};

const activateResetButton = () => {
    $('#reset-level').on('click', function (){
        if(currentLevel===0){
            location.reload();
        } else {
            changeLevel(currentLevel,currentLevel);
        }
    });
};


const allEqual = (arrOne, arrTwo) => {
    let indexTrue = 0;
    for (let i =0; i < arrOne.length; i++) {
        if (arrOne[i]===arrTwo[i]){
            indexTrue++;
            if (indexTrue===arrOne.length){
                return true;
            }
        } else{
            return false; 
        }
    }
};

let fullDeck ='';

$(()=>{
    const drawCard = (deckId) => {
        const promisePiles = $.ajax({
            url: 'https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?count=52',
        });

        promisePiles.then( data =>{
            fullDeck=data;
        });
    };

    const promiseDeck = () => {
        const promiseCards = $.ajax({
            url: 'https://deckofcardsapi.com/api/deck/new',
            type: 'GET',
        });

        promiseCards.then( data =>{
            const deckId = data.deck_id;
            drawCard(deckId);
        });
    };

    promiseDeck();
    level0();
    activateResetButton();
    
    $('.timer').css('display','none');

    $('#info').on('click', function (){
        if (currentLevel!==0){
            stopTimer();
        }
        displayAbout();
        $('#about-close').on('click', () => {
            closeAbout();
            if (currentLevel!==0){
                runTimer();
            }
        });
    });

    for (let i=1;i<=10;i++){
        $(`.level-${i}`).css('display','none');
    }

    $('.level-button').prop('disabled',true);

    for (let i=0; i<$('.level-button').length; i++){
        $('.level-button').eq(i).on('click', function (){
            $('.game').empty();
            
            changeLevel(currentLevel,i+1);
            currentLevel= i+1;
        });
    }

});


