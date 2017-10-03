
var staticCards = [];
var deck = [];
var tempDeck = [];
var deckPile = [];
var boardPile1 = [];
var boardPile2 = [];
var boardPile3 = [];
var boardPile4 = [];
var boardPile5 = [];
var boardPile6 = [];
var boardPile7 = [];
var finalPile1 = [];
var finalPile2 = [];
var finalPile3 = [];
var finalPile4 = [];

// Ace: 0, king: 12 
// 0-12: hearts, 13-25:diamonds, 26-38:spades, 39-52:clubs
function init() {
    staticCards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11, 12, 13, 14, 15, 16, 17 , 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]
    deck = staticCards;
    deck = makeRandom(deck);
    makePile(boardPile1, 1);
    makePile(boardPile2, 2);
    makePile(boardPile3, 3);
    makePile(boardPile4, 4);
    makePile(boardPile5, 5);
    makePile(boardPile6, 6);
    makePile(boardPile7, 7);
    console.log(boardPile1);
    console.log(boardPile2);
    console.log(boardPile3);
    console.log(boardPile4);
    console.log(boardPile5);
    console.log(boardPile6);
    console.log(boardPile7);
    
}

function makeRandom(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

function makePile(pile, num) {
    for (var i = 0; i < num; i++)
    pile.push(deck.shift());
}

init();