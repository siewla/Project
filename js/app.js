let currentIndex=0;

const changeDisplayLevel = (fromCurrentLevel, changeToLevel) =>{
    $(`.level-${fromCurrentLevel}`).css('display','none');
    $(`.level-${changeToLevel}`).css('display','block');
};

const activateLevelButton = (levelIndex) =>{
    $('.level-button').eq(levelIndex).prop('disabled',false);
};

const activateResetButton = () => {
    $('#reset-level').on('click', function (){
        resetLevel(currentIndex);
    });
};

const changeLevel = (curIndex, curLevel)=>{
    activateLevelButton(curIndex);
    changeDisplayLevel(curIndex,curLevel);
    currentIndex=curIndex;
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

const resetLevel = (levelIndex) => {
    switch(levelIndex){
    case 0:
        break;
    case 1: 
        $('.level2-img').removeAttr('style');                   
        break;
    case 2: 
        $('.level3-img').css('display','block');
        $('.level3-img').css({ 'top':'', 'left':'' });             
        level3();
        break;
    case 3:
        $('.level4-img').width(10);
        $('.level4-img').css('filter','blur(2px)');
        break;
    case 4:
        $('.level5-img').css('opacity','1');
        level5();
        break;
    case 5:
        $('.level6-img').css({ 'top':'', 'left':'' });
        $('.level6-img').draggable({ disabled: false });
        level6();
        break;
    case 6:
        $('.level7-img').unbind('dblclick');
        $('.level7-img').css('display','block');
        level7();
        break;
    default:
    
    }
};


$(()=>{
    level1();
    level2();
    level3();
    level4();
    level5();
    level6();
    level7();
    // level8();
    // level9();
    // level10();
    activateResetButton();

    for (let i=2;i<=10;i++){
        $(`.level-${i}`).css('display','none');
    }

    $('.level-button').prop('disabled',true);
    $('.level-button').eq(0).prop('disabled',false);

    for (let i=0; i<$('.level-button').length; i++){
        $('.level-button').eq(i).on('click', function (){
            changeDisplayLevel(currentIndex+1,i+1);
            currentIndex=i;
        });
    }
});


