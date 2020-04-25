const minusTips = (index) =>{
    remainingTips--;
    $('.tips').eq(index).css('opacity','0.4');
    $('.tips').eq(index).unbind('click');
};