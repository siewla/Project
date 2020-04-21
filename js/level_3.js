let itemInsidebox = 0;

$(()=>{
  
    const level3 =() => {    
        $('.level3-img').draggable({
            containment: '.level-3-container'
        });

        $('#level3-dragzone').droppable({
            tolerance: 'intersect',
            accept:'.level3-img',
            drop: function (event,ui){
                activateResetButton();
                console.log(itemInsidebox);
                itemInsidebox++;
                ui.draggable.css('display','none');
                if (itemInsidebox===4){
                    setTimeout(function (){
                        displayWinning();
                    } , 200);
                    changeLevel(3,4);
                }
            }
        });
    };

    level3();
});