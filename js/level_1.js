const level1 = () => {
    createGameLevel(1,'Level 1 - Click the largest Card');

    const cardArray =cardsRandom(4);
    const cardID = ['A','B','C','D'];

    
    for (let i =0; i<cardArray.length;i++){
        $('<img>').attr({ src: `${getImgURL(cardArray[i])}`, id: `${cardID[i]}` }).addClass('level1-img').appendTo('#level-1');
    }

    const sortedCards = sortedCardArray(cardArray); 

    for (let i=0; i<$('.level1-img').length; i++){
        $('.level1-img').eq(i).on('click', function (){
            if(cardArray[i]===sortedCards[3]){
                changeLevel(1,2);
                alert ('Congratulations. You are correct.');
            } else {
                alert ('Please try again');
            }
        }); 
    }
};