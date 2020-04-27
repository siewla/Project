const level0 = () => {
    $('#start-game').on('click', function (){
        checkLives();
    });
    
    $('#correct-start').on('click', function (){
        alert('What a great start!');
        changeLevel(0,1);
    });
};