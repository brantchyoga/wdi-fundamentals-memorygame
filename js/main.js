
var cards = [
{
	suit : "Diamonds",
	rank : "Queen",
	cardImage : "images/queen-of-diamonds.png"
},
{
	suit : "Hearts",
	rank : "Queen",
	cardImage : "images/queen-of-hearts.png"
},
{
	suit : "Diamonds",
	rank : "King",
	cardImage : "images/king-of-diamonds.png"
},
{
	suit : "Hearts",
	rank : "King",
	cardImage : "images/king-of-hearts.png"
}
];



var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("sorry, try again.");
	}
};

var flipCard = function (cardId) {

	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);

	if (!(cardsInPlay.length === 2)) {
	console.log(cardsInPlay.length);
	alert("Pick another card");
	} else {
		checkForMatch();
	}
};

flipCard(0);
flipCard(2);