var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		score += 1
		alert("You found a match!\n\nScore: "+ score);
	} else {
		score = 0
		alert("Sorry, try again.\n\nScore: " + score);
	}
}

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log(cards[cardId].cardImage);
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank + ".");	
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch ();
	}

	if (cardsInPlay.length === 4) {
		checkForMatch ();
	}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(cards);

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src',"images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);

		document.getElementById('game-board').appendChild(cardElement);
		score = 0;
	}
};

createBoard();
var score = null;
