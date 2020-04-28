const level7 = () =>{
    createGameLevel(7,''); 
    const cardArray =cardsRandom(3);
    for (let i =0; i<cardArray.length;i++){
        $('<img>').attr({ src: `${getImgURL(cardArray[i])}` }).addClass('level7-img').appendTo('#level-7');
    }
    $('<img>').attr({ src: 'img/box.png', id:'level7-dragzone' }).addClass('box').appendTo('#level-7');
    $('<div>Level 7 : Put <span class="level7-img">everything</span> inside the box</div>').appendTo('.level-title');
    let itemInsidebox = 0; 
    for (let i=0;i<$('.level7-img').length;i++){
        $('.level7-img').eq(i).draggable({
            containment: '.level-container',
            drag: function () {
                $('.level7-img').eq(i).css('opacity','0.6');
            },
        });
    }
    
    $('#level7-dragzone').droppable({
        tolerance: 'intersect',
        accept:'.level7-img',
        drop: function (event,ui){
            itemInsidebox++;
            ui.draggable.css('display','none');
            if (itemInsidebox===4){
                setTimeout(function (){
                    displayWinning();
                } , 200);
                setTimeout(function (){
                    changeLevel(7,8);
                } , 200);
            }
        }
    });
};
