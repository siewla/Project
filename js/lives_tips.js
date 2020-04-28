const minusTips = (index) =>{
    if (tipsIndex.includes(currentLevel)===false){
        tipsIndex.push(currentLevel);
        remainingTips--;
        $('.tips').eq(index).css('opacity','0.4');
        $('.tips').eq(index).unbind('click');
    }
};

const minusLives = () =>{
    remainingLives--;
    $('.active').last().removeClass('active').css('opacity','0.4');
    if (currentLevel !==0){
        stopTimer();
        resetTimer(currentLevelTimer());
        runTimer();
    }
};    

const checkLives = () => {
    if (remainingLives===1){
        alert('Game Over'); 
        $('.active').last().removeClass('active').css('opacity','0.4');
        setTimeout(function (){
            location.reload();
        } , 400);
        return false;
    }else{
        minusLives();
        alert('You lost a live');
        return true;
    }
};