
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!"); }
	else {
	    console.log("Sorry, try again.");
	}
} 

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
	if (cardsInPlay.length === 2){
	   checkForMatch();
	}
}

flipCard(0);

cardsInPlay.push(flipCard(cards[cardId]));

 

