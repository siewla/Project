const level3 =() => {
    currentLevel = 3;
    createGameLevel(3,'Level 3 - Click the first row right to left and last row in order');   
    const cardArray =cardsRandom(9);
    for (let i =0; i<cardArray.length;i++){
        $('<img>').attr({ src: `${getImgURL(cardArray[i])}`, id: `index-${cardArray[i]}` }).addClass('level3-img').appendTo('#level-3');
    }

    const correctArray =[];
    const unsortedLastThreeArray =[];
    for (let i=6;i<cardArray.length;i++){
        unsortedLastThreeArray.push(cardArray[i]);
    }
    const sortedCards = sortedCardArray(unsortedLastThreeArray); 
    
    for (let i=2;i>=0;i--){
        correctArray.push(`index-${cardArray[i]}`);
    }
    for (let i=0;i<3;i++){
        correctArray.push(`index-${sortedCards[i]}`);
    }


    let idArray = [];
    for (let i=0; i<$('.level3-img').length; i++){
        $('.level3-img').eq(i).on('click',function (event){
            event.preventDefault();
            $('.level3-img').eq(i).unbind('click');
            $('.level3-img').eq(i).css('opacity','0.6');
            let id = $('.level3-img').eq(i)[0].id;
            idArray.push(id); 
            if (idArray.length === 6){
                let checkArray = allEqual(correctArray,idArray);
                if (checkArray){
                    showWinningAlert();
                } else {
                    showLosingAlert();
                }
                
            }
        });
    }    
};
