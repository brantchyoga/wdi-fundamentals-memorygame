
var cards = [
{
	suit : "Diamonds",
	rank : "Queen",
	cardImage : "img/queen-of-diamonds.png"
},
{
	suit : "Hearts",
	rank : "Queen",
	cardImage : "img/queen-of-hearts.png"
},
{
	suit : "Diamonds",
	rank : "King",
	cardImage : "img/king-of-diamonds.png"
},
{
	suit : "Hearts",
	rank : "King",
	cardImage : "img/king-of-hearts.png"
}
]; 

var cardsInPlay = [];

var checkForMatch = function () {
	console.log(cardsInPlay);
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a matching " + cardsInPlay[0] + "s!");
		reset();
		createBoard();
	} else {
		alert("sorry, try again.");
		reset();
		createBoard();
	}
};

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cardsInPlay);
	if (!(cardsInPlay.length === 2)) {
	console.log(cardsInPlay.length);
	alert("Pick another card");
	} else {
		checkForMatch();
	}
};

var board = document.getElementById('game-board');

var createBoard = function(){
	for(var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'img/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		board.appendChild(cardElement);
	};
};

var reset = function(){
	board.innerHTML = '';
	cardsInPlay = [];
};

createBoard();




// Brant Porter