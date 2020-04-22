const level3 =() => {   
    let itemInsidebox = 0; 
    $('.level3-img').draggable({
        containment: '.level-3-container'
    });

    $('#level3-dragzone').droppable({
        tolerance: 'intersect',
        accept:'.level3-img',
        drop: function (event,ui){
            itemInsidebox++;
            ui.draggable.css('display','none');
            if (itemInsidebox===4){
                setTimeout(function (){
                    displayWinning();
                } , 200);
                setTimeout(function (){
                    changeLevel(3,4);
                } , 200);
            }
        }
    });
};
