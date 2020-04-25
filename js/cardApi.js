let imgURL ='';
let cardOutside ='';
const drawCard = (deckId) => {
    const promisePiles = $.ajax({
        url: 'https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?count=52',
    });

    promisePiles.then( data =>{
        cardOutside=data;
    });
};

const promiseDeck = (cardIndex) => {
    const promiseCards = $.ajax({
        url: 'https://deckofcardsapi.com/api/deck/new',
        type: 'GET',
    });

    promiseCards.then( data =>{
        const deckId = data.deck_id;
        drawCard(deckId);
    });
};

console.log(cardOutside);


//url: 'https://deckofcardsapi.com/api/deck/' + deckId + '/draw/?cards=' + 'cardCard',
const cardIndex = [];
for (let i=0;i<52;i++){
    cardIndex.push(i);
}

shuffle(cardIndex);
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