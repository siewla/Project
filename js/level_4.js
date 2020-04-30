const level4 = () => {
    currentLevel=4;
    createGameLevel(4,'What is the number?'); 
    const cardArray =cardsRandom(1);
    const cardCode =[];
    for (let i =0; i<cardArray.length;i++){
        $('<img>').attr({ src: `${getImgURL(cardArray[i])}` }).addClass('level4-img').appendTo('#level-4');
        cardCode.push(getImgCardcode(cardArray[i]));
    }

    $('<form>').attr('id','level-4-form').appendTo('#level-4');
    $('<input type="text" id="card-code" placeholder="cardnumber">').appendTo($('#level-4-form'));
    $('<button type="submit" id="level4-submit">Submit</button>').appendTo($('#level-4-form'));

    $('.level4-img').on('click',function (){
        activateResetButton();
        $('.level4-img').css('filter','blur(1.5px)');
        let currentHeight = $('.level4-img').height();
        if (currentHeight<=250){
            $('.level4-img').height(currentHeight*1.05);
        }
    });

    const firstChar = cardCode[0].substr(0,1);

    $('#level4-submit').on('click', function (e){
        e.preventDefault();
        let answer = $('#card-code').val();
        if (answer === firstChar){
            showWinningAlert();
        } else {
            showLosingAlert();
        }
    });
};



