const level9 = () => {
    currentLevel=9;
    createGameLevel(9,'Level 9 : Find out all hidden cards');
    const cardArray =cardsRandom(6);
    for (let i =0; i<cardArray.length;i++){
        $('<img>').attr({ src: `${getImgURL(cardArray[i])}` }).addClass('level9-img').appendTo('#level-9');
    }
    $('.level9-img').css('opacity','0');

 
    
    let count = 0;
    for (let i =0; i<$('.level9-img').length;i++) {
        $('.level9-img').eq(i).mouseover(function () {
            $('.level9-img').eq(i).css('opacity','1');
            $('.level9-img').eq(i).unbind('mouseover');
            count++;
            if (count == 6){
                showWinningAlert();
            }
        });
    }
};