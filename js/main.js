$(()=>{

    let imgURL ='';

    const drawCard = (deckId, cardIndex) => {
        const promisePiles = $.ajax({
            //url: 'https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?cards=' + 'cardCard',
            url: 'https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?count=52',
        });

        promisePiles.then( data =>{
            for (let i=0;i<6;i++) {
                imgURL=data.cards[cardIndex[i]].image;
                //console.log(imgURL);
            }
        });
    };

    const promiseDeck = (cardIndex) => {
        const promiseCards = $.ajax({
            url: 'https://deckofcardsapi.com/api/deck/new',
            type: 'GET',
        });

        promiseCards.then( data =>{
            const deckId = data.deck_id;
            drawCard(deckId, cardIndex);
        });
    };

    const shuffle = (arrayOne) => {
        let count = arrayOne.length;
        let temp = 0;
        let index = 0;

        while (count > 0) {
            index = Math.floor(Math.random() * count);
            count--;
            temp = arrayOne[count];
            arrayOne[count] = arrayOne[index];
            arrayOne[index] = temp;
        }
        return arrayOne;
    };

    const cardIndex = [];
    for (let i=0;i<52;i++){
        cardIndex.push(i);
    }

    shuffle(cardIndex);

    
    promiseDeck(cardIndex);

    // const threeClubs = 'https://deckofcardsapi.com/static/img/3C.png';
    // const eightHearts = 'https://deckofcardsapi.com/static/img/8H.png';
    // const fiveDiamonds = 'https://deckofcardsapi.com/static/img/5D.png';
    // const tenSpades = 'https://deckofcardsapi.com/static/img/0S.png';
    
    let currentIndex=0;
    const $levelButtons = $('.level-button');
    
    for (let i=2;i<=10;i++){
        $(`.level-${i}`).css('display','none');
    }

    $levelButtons.prop('disabled',true);
    $levelButtons.eq(0).prop('disabled',false);

    for (let i=0; i<$levelButtons.length; i++){
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
                $levelButtons.eq(1).prop('disabled',false);
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

    $('#level2-submit').on('click', function (e){
        e.preventDefault();
        let answer = $('#number-of-cards').val();
        if (answer === '6'){
            $levelButtons.eq(2).prop('disabled',false);
            alert ('Congratulations. You are correct.');
        } else {
            alert ('Please try again');
        }
    });

    const displayWinning = () =>{
        alert ('Congratulations. The hint worked!');
    };

    
    const level3 =() => {
        let i =0; 
        $('.level3-img').draggable({
            containment: '.level-3-container'
        });

        $('#level3-dragzone').droppable({
            tolerance: 'intersect',
            accept:'.level3-img',
            drop: function (event,ui){
                i++;
                ui.draggable.css('display','none');
                if (i===4){
                    $levelButtons.eq(3).prop('disabled',false);
                    displayWinning();
                    
                }
            }
        });
    };

    level3();

    const level4 = () => {
        $('.level4-img').on('click',function (){
            let currentWidth = $('.level4-img').width();
            if (currentWidth<=80){
                $('.level4-img').width(currentWidth*1.05);
            }
        });

    };

    $('#level4-submit').on('click', function (e){
        e.preventDefault();
        let answer = $('#card-code').val();
        if (answer === 'qd' || answer === 'QD' || answer === 'Queen Diamonds' || answer === 'Diamonds Queen'){
            $levelButtons.eq(4).prop('disabled',false);
            alert ('Congratulations. You are correct.');
        } else {
            alert ('Please try again');
        }
    });

    level4();


    $('#reset-level').on('click', function (){
        switch(currentIndex){
        case 0:
            break;
        case 1: 
            $('.level2-img').removeAttr('style');                   
            break;
        case 2: 
            $('.level3-img').css('display','block');
            $('.level3-img').css({ 'top':'', 'left':'' });
            level3();             
            break;
        case 3:
            $('.level4-img').width(20);
        default:
        
        }
    });

    $('#tips').on('click', function (){
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
        case 3:
            alert('Tips: click me! don\'t hurt your eyes');
        default:
        }
    });

    $('#ccButton').on('click', function (e) {
        e.preventDefault();
        switch($('#cheat-code').val()){
        case 'all':
            $levelButtons.prop('disabled',false);
            break;
        default:
        }

    });
});