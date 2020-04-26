const level8 = () => {
    createGameLevel(8,'Level 8: Win this Game. (Blackjack)'); 
    
    $('<div>').attr('id','player-deck').appendTo('#level-8');
    $('<h3>').attr('class','deck-title').text('Your Deck').appendTo('#player-deck');
   
    $('<div>').attr('id','computer-deck').appendTo('#level-8');
    $('<h3>').attr('class','deck-title').text('Computer\'s Deck').appendTo('#computer-deck');
    
    $('<img>').attr({ src: `${getImgURL(12)}` }).addClass('level8-img').appendTo('#player-deck');
    $('<img>').attr({ src: `${getImgURL(4)}` }).addClass('level8-img').appendTo('#player-deck');
    $('<img>').attr({ src: `${getImgURL(11)}` }).addClass('level8-img').appendTo('#computer-deck');
    $('<img>').attr({ src: `${getImgURL(0)}` }).addClass('level8-img').appendTo('#computer-deck');

    for (let i=1;i<$('.level8-img').length;i=i+2){
        $('.level8-img').eq(i).draggable({
            containment: '.level-container',
            drag: function () {

            },
        });
    }

    let count = 0;
    const checkForWinng = () => {
        if (count===2){
            setTimeout(function (){
                alert('You are good in cheating');
            } , 200);
            setTimeout(function (){
                changeLevel(8,9);
            } , 200);
        }
    };

    $('#player-deck').droppable({
        tolerance: 'fit',
        accept: $('.level8-img').eq(3),
        drop: function (event,ui){
            $(ui.draggable).draggable( 'option', 'disabled', true );
            count++;
            checkForWinng();
        }
    });

    $('#computer-deck').droppable({
        tolerance: 'fit',
        accept: $('.level8-img').eq(1),
        drop: function (event,ui){
            $(ui.draggable).draggable( 'option', 'disabled', true );
            count ++;
            checkForWinng();
        }
    });


};

