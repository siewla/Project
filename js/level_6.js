const level6 =() => {
    let offsetImg =0;
    let zIndex=2;
    let stackedCard= 0;
    $('.level6-img').draggable({
        containment: '.level-6-container'
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
