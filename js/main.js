$(()=>{

    // let imgURL ='';

    // const drawCard = (deckId, cardIndex) => {
    //     const promisePiles = $.ajax({
    //         //url: 'https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?cards=' + 'cardCard',
    //         url: 'https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?count=52',
    //     });

    //     promisePiles.then( data =>{
    //         for (let i=0;i<6;i++) {
    //             imgURL=data.cards[cardIndex[i]].image;
    //             //console.log(imgURL);
    //         }
    //     });
    // };

    // const promiseDeck = (cardIndex) => {
    //     const promiseCards = $.ajax({
    //         url: 'https://deckofcardsapi.com/api/deck/new',
    //         type: 'GET',
    //     });

    //     promiseCards.then( data =>{
    //         const deckId = data.deck_id;
    //         drawCard(deckId, cardIndex);
    //     });
    // };

    // const shuffle = (arrayOne) => {
    //     let count = arrayOne.length;
    //     let temp = 0;
    //     let index = 0;

    //     while (count > 0) {
    //         index = Math.floor(Math.random() * count);
    //         count--;
    //         temp = arrayOne[count];
    //         arrayOne[count] = arrayOne[index];
    //         arrayOne[index] = temp;
    //     }
    //     return arrayOne;
    // };

    // const cardIndex = [];
    // for (let i=0;i<52;i++){
    //     cardIndex.push(i);
    // }

    // shuffle(cardIndex);

    
    // promiseDeck(cardIndex);

    // const threeClubs = 'https://deckofcardsapi.com/static/img/3C.png';
    // const eightHearts = 'https://deckofcardsapi.com/static/img/8H.png';
    // const fiveDiamonds = 'https://deckofcardsapi.com/static/img/5D.png';
    // const tenSpades = 'https://deckofcardsapi.com/static/img/0S.png';
    
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
            break;
        case 4:
            alert('There are only 2 rows involved.');
            break;
        case 5:
            alert('We are stackable');
            break;
        case 6:
            alert('Kick out your enemy.');
            break;
        default:
        }
    });

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