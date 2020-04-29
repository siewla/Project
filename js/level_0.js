const level0 = () => {
    $('#start-game').on('click', function (){
        showLosingAlert();
    });
    
    $('#correct-start').on('click', function (){
        showWinningAlert();
    });
};
