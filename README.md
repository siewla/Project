# Brain Out - Cards
 
## Game Descriptions
A gauntlet of card puzzles that involve interactions with cards. Players have to complete tasks like clicking on the highest valued card, or move a bunch of cards into a box, etc. There are currently 10 levels. The game inspiration is coming from a mobile game application named 'Brain Out'. (available both in iOS and Android). 

## Game Link
[https://siewla.github.io/brainout-cards/](https://siewla.github.io/brainout-cards/)

## Technologies
* **HTML**
* **CSS**
* **Javascript**
* **Jquery** is used to manage DOM manipulation 
* **Jquery UI** is used for draggable and droppable 
* **Ajax** is used to request and access data from the API library

## API used
[http://deckofcardsapi.com/](http://deckofcardsapi.com/)
The **API** is used to randomly pick the cards from the deck. 

## Approaches Taken
My **objective** is to create a game that is simple but fun. To achieve that i also did some research on games within the scope of the unit 1. 

## Accomplishments  
* The cards are randomly generated every time. 
(To reduce confusion, i avoided using A, J, Q and K). 
* To reach out to bigger crowds for feedbacks and reviews, i explored how to convert click to tap on mobile.
* The UI is responsive to normal website and mobile potrait mode. 
* The normal alert from browser is replaced by modal. 
* Dynamic timer implemented. (different level has different time given).

## Difficulties Faced
* The timer was messed out, as the timer tended to move faster after clicking the same event handler more than one time. Solution : unbind() all the event handlers after calling like close button. 
* The code are getting lengthier and harder to interpret. 
Solution : refactor and seperating the .js files (one level one .js file for better code debugging). 

## Game Instructions
* Clear all 10 levels to win the game. 
* Each new player is given 5 lives and 5 tips. 

## Wireframe Design and User Stories
1. The user will see the front page of the game as per below. There is about button for user to understand the rules. However, without the guide from about, the users shall still able to get started.  
<table><tr><td>
 <img src="https://github.com/siewla/brainout-cards/blob/master/img/wireframe1.png" width="500px"/>
</td></tr></table>

2. After user manage to clear level-0 (starting page), user will be directed to level-1, the button will turn green and the timer will start running.  
<table><tr><td>
 <img src="https://github.com/siewla/brainout-cards/blob/master/img/wireframe2.png" width="500px"/>
</td></tr></table>

3. When user click/tap the tips, the tips will be popped out (alert). The timer will pause and resume after the user close the alert.
<table><tr><td>
 <img src="https://github.com/siewla/brainout-cards/blob/master/img/wireframe3.png" width="500px"/>
</td></tr></table>

4. When timeout, a alert will be popped out user's lives will be deducted. After user close the alert, the game restart at the level. 
<table><tr><td>
 <img src="https://github.com/siewla/brainout-cards/blob/master/img/wireframe4.png" width="500px"/>
</td></tr></table>

5. When user clear the level, the subsequent level will turn green and previous level button will have opacity, yet the user is able to return to the previous level by pressing the level button. 
<table><tr><td>
 <img src="https://github.com/siewla/brainout-cards/blob/master/img/wireframe5.png" width="500px"/>
</td></tr></table>


## Additional Features were under Considerations
- Sign in feature
- Leaderboard
- More levels involving rotating the element, pan the image, etc. 

## Credits
- all the alpha trial users (the feedbacks helped me to improve on my UI a lot). 


