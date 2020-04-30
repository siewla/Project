const level5 = () => {
    currentLevel = 5;
    createGameLevel(5,'');
    const cardArray =cardsRandom(9);
    for (let i =0; i<cardArray.length;i++){
        $('<img>').attr({ src: `${getImgURL(cardArray[i])}`, id: `index-${cardArray[i]}` }).addClass('level5-img').appendTo('#level-5');
    }
    $('.level-description').html(`Submit card ${getImgCardcode(cardArray[4])}`);
    let count = 0;

    for (let i=0; i<$('.level5-img').length; i++){
        $('.level5-img').eq(i).on('click',function (event){
            let imgid = $('.level5-img').eq(i)[0].id;
            if (imgid!==`index-${cardArray[4]}`){
                $(this).css('display','none');
                count++;
            } else{
                showLosingAlert();
            }
            
            if (count == 8){
                showWinningAlert();
            }
        });
    }
};
