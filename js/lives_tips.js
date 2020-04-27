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
    alert('Please try again, You lost a live');

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
        return true;
    }
};