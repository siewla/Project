$(()=>{
    for (let i=0; i<$('.tips').length;i++){
        $('.tips').eq(i).on('click', function (){
            minusTips(i);
            switch(currentLevel){
            case 0:
                alert('Click \'here\' in the sentence');
                break;
            case 1:
                alert('Biggest Value in the Deck');
                break;
            case 2: 
                alert('We are hiding!');               
                break;
            case 3: 
                alert('There are only 2 rows involved');         
                break;
            case 4:
                alert('click me! don\'t hurt your eyes');
                break;
            case 5:
                alert('Kick out your enemy.');
                break;
            case 6:
                alert('We are stackable');
                break;
            case 7:
                alert('Everything :)'); 
                break;
            case 8:
                alert('You need to steal and return the card.');
                break;
            case 9:
                alert('Just move around inside the container, you will find us, total 6 of us.');
                break;
            case 10:
                break;
            default:
            }
        });
    }

    $('#ccButton').on('click', function (e) {
        e.preventDefault();
        switch($('#cheat-code').val()){
        case 'all':
            $('.level-button').prop('disabled',false);
            break;
        default:
        }

    });
});