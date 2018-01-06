
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User Flipped " + cardsInPlay);

var cardTwo = cards[1];

cardsInPlay.push(cardTwo);

console.log("User Flipped " + cardsInPlay);

if (!(cardsInPlay.length === 2)) {
	alert("Pick another card");
} else if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You Picked a match");
} else {
	alert("try again");
};
