const level2 = () => {
    $( function () {
        $('.level2-img').draggable({
            containment: '.level-2-container'
        });
    });

    $('#level2-submit').on('click', function (e){
        e.preventDefault();
        const answer = $('#number-of-cards').val();
        if (answer === '6'){
            changeLevel(2,3);
            alert ('Congratulations. You are correct.');
        } else {
            alert ('Please try again');
        }
    });
};