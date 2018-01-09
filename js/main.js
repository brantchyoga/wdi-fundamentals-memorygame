
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("sorry, try again.");
	}
};

var flipCard = function (cardId) {

	console.log("User flipped " + cards[cardId]);

	cardsInPlay.push(cards[cardId]);

	if (!(cardsInPlay.length === 2)) {
	console.log(cardsInPlay.length);
	alert("Pick another card");
	} else {
		checkForMatch();
	}
};

flipCard(0);
flipCard(2);