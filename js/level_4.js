$(() => {
    const level4 = () => {
        $('.level4-img').on('click',function (){
            activateResetButton();
            $('.level4-img').css('filter','blur(1px)');
            let currentWidth = $('.level4-img').width();
            if (currentWidth<=80){
                $('.level4-img').width(currentWidth*1.05);
            }
        });
    };

    $('#level4-submit').on('click', function (e){
        e.preventDefault();
        let answer = $('#card-code').val();
        if (answer === '10'){
            changeLevel(4,5);
            alert ('Congratulations. You are correct.');
        } else {
            alert ('Please try again');
        }
    });

    level4();
});