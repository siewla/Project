const minusTips = () =>{
    if (tipsIndex.includes(currentLevel)===false){
        tipsIndex.push(currentLevel);
        remainingTips--;
        $('.active-tips').last().removeClass('active-tips').css('opacity','0.4');
    }
};

const minusLives = () =>{
    remainingLives--;
    $('.active').last().removeClass('active').css('opacity','0.4');
};    

const checkLives = () => {
    if (remainingLives===1){
        $('#modal-content').html('GAME OVER');
        restartGame();
        $('.active').last().removeClass('active').css('opacity','0.4');
        return false;
    }else{
        minusLives();
        return true;
    }
};