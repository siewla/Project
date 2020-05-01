# Brain Out - Cards
 
## Game Descriptions
A gauntlet of card puzzles that involve interactions with cards. Players have to complete tasks like clicking on the highest valued card, or move a bunch of cards into a box, etc. There are currently 10 levels planned. The game inspiration is coming from a mobile game application named 'Brain Out'. (available both in iOS and Android). 

## Game Link
[https://siewla.github.io/brainout-cards/](https://siewla.github.io/brainout-cards/)

## Technologies
* HTML
* CSS
* Javascript
* Jquery 
* Jquery UI
* Ajax

## Wireframe design
<table><tr><td>
 <img src="https://github.com/siewla/brainout-cards/blob/master/img/wireframe5.png" width="500px"/>
</td></tr></table>
<table><tr><td>
 <img src="https://github.com/siewla/brainout-cards/blob/master/img/wireframe6.png" width="500px"/>
</td></tr></table>

## API used
[http://deckofcardsapi.com/](http://deckofcardsapi.com/)
The API is used to randomly pick the cards from the deck. 

## Approaches Taken
My objective is to create a game that is simple but fun. To achieve that i also did some research on games within the scope of the unit 1. 

## Accomplishments  
* The cards are randomly generated every time. 
(To reduce confusion, i avoided using A, J, Q and K). 
* To reach out to bigger crowds for feedbacks and review, i explored how to convert click to tap on mobile.
* The UI is responsive to normal website and mobile potrait mode. 
* The normal alert from browser is replaced by modal. 
* Dynamic timer implemented. (different level has different time given).

## Unsolved Problem
* The timer will be messed out if the user returned from higher level to lower level and pressed the earned tip multiple tips. (the clearInternal or/and clearTimeout are working fine if the users didn't press the same tips for more than 3 times after return from higher level). 

## Game Instructions
Clear all 10 levels to win the game. 

## Additional Features were under Considerations
- Sign in feature
- Leaderboard
- More levels involving rotating the element, pan the image, etc. 

