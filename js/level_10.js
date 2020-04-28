const level10 = () => {
    createGameLevel(10,'Level 10 : What is the card code?');
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
    $('<button type="submit" class="btn btn-primary boroughs" id="level10-submit">Submit</button>').appendTo($('#level-10-form'));

  
    
    $( function () {
        $('.level10-img').draggable();
    });

    // let clicking = false;
    // let previousX;
    // let previousY;

    // $('#inner').mousedown(function (e){
    //     e.preventDefault();
    //     previousX = e.clientX;
    //     previousY = e.clientY;
    //     clicking = true;
    // });

    // $(document).mouseup(function (){
    //     clicking = false;
    // });

    // $('#inner').mousemove(function (e) {
    //     if (clicking){
    //         e.preventDefault();
    //         $('#inner').scrollLeft($('#inner').scrollLeft() + (previousX - e.clientX));
    //         $('#inner').scrollTop($('#inner').scrollTop() + (previousY - e.clientY));
    //         previousX = e.clientX;
    //         previousY = e.clientY;
    //     }
    // });

    // $('#inner').mouseleave(function () {
    //     clicking = false;
    // });

    $('#level10-submit').on('click', function (e){
        e.preventDefault();
        let answer = $('#cardcode10').val();
        if (answer === cardCode[0]){
            alert ('Congratulations. You completed 10 levels.');
            setTimeout(function (){
                location.reload();
            } , 1000);
        } else {
            checkLives();
        }
    });

};
