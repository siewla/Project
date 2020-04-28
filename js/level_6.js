const level6 =() => {
    createGameLevel(6,'Level 6 - What is the biggest value deck?');
    const cardArray =cardsRandom(4);
    $('<img>').attr({ src: `${getImgURL(cardArray[0])}` }).addClass('level6-dropzone').appendTo('#level-6');
    for (let i =1; i<cardArray.length;i++){
        $('<img>').attr({ src: `${getImgURL(cardArray[i])}` }).addClass('level6-img').appendTo('#level-6');
    }
    let offsetImg =0;
    let zIndex=2;
    let stackedCard= 0;
    $('.level6-img').draggable({
        containment: '.level-container'
    });



    $('.level6-dropzone').droppable({
        tolerance: 'intersect',
        accept: '.level6-img',
        stack: '.level6-img',
        drop: function (event, ui){
            offsetImg+=10;
            ui.draggable.css('z-index',zIndex++);
            ui.draggable.position({
                my: `right+${offsetImg}`,
                at: 'right',
                of: '.level6-dropzone'
            });
            ui.draggable.draggable({ disabled: true });
            stackedCard++;
            if (stackedCard===3){
                changeLevel(6,7);
                alert('Congratulations. You are so smart');
            }
        }
    });
};
