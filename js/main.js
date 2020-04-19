$(()=>{
/*  
    let imgURL ='';

    const drawCard = (deckId) => {
        const promisePiles = $.ajax({
            url: 'https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?cards=' + 'cardCard',
        });

        promisePiles.then( data =>{
            imgURL=data.cards[0].image;
        });
    };

    const promiseDeck = () => {
        const promiseCards = $.ajax({
            url: 'https://deckofcardsapi.com/api/deck/new',
            type: 'GET',
        });

        promiseCards.then( data =>{
            const deckId = data.deck_id;
            drawCard(deckId,'AS');
        });
    };

    promiseDeck();
*/

    // const threeClubs = 'https://deckofcardsapi.com/static/img/3C.png';
    // const eightHearts = 'https://deckofcardsapi.com/static/img/8H.png';
    // const fiveDiamonds = 'https://deckofcardsapi.com/static/img/5D.png';
    // const tenSpades = 'https://deckofcardsapi.com/static/img/0S.png';
    
    let currentIndex=0;
    const $levelButtons = $('.level-button');
    
    for (let i=2;i<=4;i++){
        $(`.level-${i}`).css('display','none');
    }


    // for (let i=0; i<$levelButtons.length; i++){
    for (let i=0; i<3; i++){
        $levelButtons.eq(i).on('click', function (){
            let currentLevel=currentIndex+1;
            const current='level-'+currentLevel;
            let j=i+1;
            const change ='level-'+j;
            $(`.${current}`).css('display','none');
            $(`.${change}`).css('display','block');
            currentIndex=i;
        });
    }
    

    const $levelOneimages=$('#level-1');
    for (let i=0; i<$levelOneimages.children().length; i++){
        $levelOneimages.children().eq(i).on('click', function (){
            if(i===2){
                alert ('Congratulations. You are correct.');
            } else {
                alert ('Please try again');
            }
        });
    }
    $( function () {
        $('.level2-img').draggable({
            containment: '.level-2-container'
        });
    } );


    $('#level2-submit').on('click', function (){
        let answer = $('#number-of-cards').val();
        console.log(answer);
        if (answer === '6'){
            alert ('Congratulations. You are correct.');
        } else {
            alert ('Please try again');
        }
    });



    $('#tips').on('click',function (){
        switch(currentIndex){
        case 0:
            alert('Tips: Biggest Value in the Deck');
            break;
        case 1: 
            alert('Tips: We are hiding!');               
            break;
        case 2: 
            alert('Tips: Everything :)');               
            break;
        default:

        }
    });

    $('#reset-level').on('click', function (){
        switch(currentIndex){
        case 0:
            alert('Tips: Biggest Value in the Deck');
            break;
        case 1: 
            $('.level2-img').removeAttr('style');                   
            break;
        case 2: 
            //$('.level2-img').css('position','absolute');            
            break;
        default:
        
        }
    });
 

});