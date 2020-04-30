const level10 = () => {
    currentLevel=10;
    createGameLevel(10,'What is the card code?');
    const cardArray =cardsRandom(1);
    const cardCode =[];

    $('<div>').attr('id','inner').appendTo('#level-10');

    // $('<div>').attr('id','outer').appendTo('#level-10');
    // $('<div>').attr('id','inner').appendTo('#outer');
    for (let i =0; i<cardArray.length;i++){
        $('<img>').attr({ src: `${getImgURL(cardArray[i])}` }).addClass('level10-img').appendTo('#inner');
        cardCode.push(getImgCardcode(cardArray[i]));
    }

    $('<form>').attr('id','level-10-form').appendTo('#level-10');
    $('<input type="text" id="cardcode10" placeholder="eg. 5S 2D 6C 9H">').appendTo($('#level-10-form'));
    $('<button type="submit" id="level10-submit">Submit</button>').appendTo($('#level-10-form'));

  
    
    $( function () {
        $('.level10-img').draggable();
    });

    $('#level10-submit').on('click', function (e){
        e.preventDefault();
        let answer = $('#cardcode10').val();
        if (answer === cardCode[0]){
            $('#modal-content').html('<p>Bravo. </p> <p> You completed 10 Levels. </p>');
            stopTimer();
            restartGame();
        } else {
            showLosingAlert();
        }
    });

};
