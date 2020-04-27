const level2 = () => {
    createGameLevel(2,'Level 2 - How many cards?');
    const cardArray =cardsRandom(6);
    for (let i =0; i<cardArray.length;i++){
        $('<img>').attr({ src: `${getImgURL(cardArray[i])}` }).addClass('level2-img').appendTo('#level-2');
    }

    $('<form>').attr('id','level-2-form').appendTo('#level-2');
    $('<input type="text" id="number-of-cards" placeholder="# of Cards"></input>').appendTo($('#level-2-form'));
    $('<button type="submit" class="btn btn-primary boroughs" id="level2-submit">Submit</button>').appendTo($('#level-2-form'));

    $( function () {
        $('.level2-img').draggable({
            containment: '.level-container'
        });
    });

    $('#level2-submit').on('click', function (e){
        e.preventDefault();
        const answer = $('#number-of-cards').val();
        if (answer === '6'){
            changeLevel(2,3);
            alert ('Congratulations. You are correct.');
        } else {
            checkLives();
        }
    });
};

