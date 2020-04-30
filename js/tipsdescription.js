$(()=>{
    for (let i=0; i<$('.tips').length;i++){
        $('.tips').eq(i).on('click', function (){
            stopTimer();
            let message = '';
            if ($('.active-tips').length >0 || tipsIndex.includes(currentLevel)===true) {
                minusTips(i);
                switch(currentLevel){
                case 0:
                    message = 'Click \'here\' in the sentence';
                    break;
                case 1:
                    message = 'Biggest Value in the Deck';
                    break;
                case 2: 
                    message = 'We are hiding!';               
                    break;
                case 3: 
                    message = 'There are only 2 rows involved';         
                    break;
                case 4:
                    message = 'click me! don\'t hurt your eyes';
                    break;
                case 5:
                    message = 'Kick out your enemies.';
                    break;
                case 6:
                    message = 'We are stackable';
                    break;
                case 7:
                    message = 'Everything :)'; 
                    break;
                case 8:
                    message = 'You need to steal and return the card.';
                    break;
                case 9:
                    message = '<p>Just move around inside the container, </p> <p> you will find us, total 6 of us.</p>';
                    break;
                case 10:
                    message = 'The card is overflown but it can move around.';
                    break;
                default:
                } 
            }else {
                message='You running out of tips';
            }
            
            $('#modal-content').html(message);
            displayAlert();
            $('#modal-close').on('click', () => {
                closeAlert();
                $('#modal-close').unbind();
                runTimer();
            });
            
        });
    }

    // $('#ccButton').on('click', function (e) {
    //     e.preventDefault();
    //     switch($('#cheat-code').val()){
    //     case 'all':
    //         $('.level-button').prop('disabled',false);
    //         break;
    //     default:
    //     }

    // });
});