const level0 = () => {
    $('#start-game').on('click', function (){
        alert('I hope you are not using the tips before the real game! Think harder!');
    });
    
    $('#correct-start').on('click', function (){
        activateResetButton();
        alert('What a great start!');
        changeLevel(0,1);
    });
};