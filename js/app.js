let currentLevel=0;
let remainingTips=5;
let remainingLives=5;
let tipsIndex = [];

const displayLevel = (level) => {
    eval(`level${level}()`);
    $(`.level-${level}`).css('display','block');
};

const displayNoneLevel = (level) => {   
    $(`.level-${level}`).css('display','none');
};

const changeDisplayLevel = (fromCurrentLevel, changeToLevel) =>{
    displayNoneLevel(fromCurrentLevel);
    $('.game').empty();
    displayLevel(changeToLevel);
};

const activateLevelButton = (levelIndex) =>{
    $('.level-button').eq(levelIndex-1).prop('disabled',false);
};

const activateResetButton = () => {
    $('#reset-level').on('click', function (){
        $('.game').empty();
        displayLevel(currentLevel);
    });
};

const changeLevel = (current, next)=>{
    activateLevelButton(next);
    changeDisplayLevel(current,next);
    currentLevel=next;
};

const displayWinning = () =>{
    alert ('Congratulations. The hint worked!');
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


