
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
var firstPile = [];

// Ace: 0, king: 12 
// 0-12: hearts, 13-25:diamonds, 26-38:spades, 39-52:clubs

//set up the board
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
    console.log(deck);
}

//deck randomizer
function makeRandom(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

// create initial piles
function makePile(pile, num) {
    for (var i = 0; i < num; i++)
    pile.unshift(deck.shift());
}

init();

// moving cards click events
// document.querySelector(".boardPile").children.addEventListener("click", handleClick);
document.querySelector("#deck").addEventListener("click", handleClick);
document.querySelector("#deckPile").addEventListener("click", handleClick);
document.querySelector("#boardPile1").addEventListener("click", handleClick);
document.querySelector("#boardPile2").addEventListener("click", handleClick);
document.querySelector("#boardPile3").addEventListener("click", handleClick);
document.querySelector("#boardPile4").addEventListener("click", handleClick);
document.querySelector("#boardPile5").addEventListener("click", handleClick);
document.querySelector("#boardPile6").addEventListener("click", handleClick);
document.querySelector("#boardPile7").addEventListener("click", handleClick);




function handleClick(evt) {
    if (firstPile.length === 0) {
        switch (evt.target.id) {
            case "deck":
                if (deck.length === 0) {
                    reshuffleDeck();
                }
                
                console.log(deck)                
            break;
            case "deckPile":
                
                console.log(firstPile);
                break;
            case "boardPile1":
                
                console.log(firstPile);
                break;
            case "boardPile2":
                
                console.log(firstPile)                                
                break;
            case "boardPile3":
                
                console.log(firstPile)                                                
                break;
            case "boardPile4":
                
                console.log(firstPile)                                                
                break;
            case "boardPile5":
                
                console.log(firstPile)                                                
                break;
            case "boardPile6":
                
                console.log(firstPile)                                                
                break;
            case "boardPile7":
                
                console.log(firstPile)                                                
                break;
            case "finalPile1":
                
                break;
            case "finalPile2":
                
                break;
            case "finalPile3":
                
                break;
            case "finalPile4":
                
                break;
    }}
    else {
        switch (evt.target.id) {
            case "deck":
                illegal();
                break;
            case "deckPile":
                illegal();
                break;
            case "boardPile1":
                checkBoardMove(firstPile, boardPile1)
                break;
            case "boardPile2":
                checkBoardMove(firstPile, boardPile2)
                break;
            case "boardPile3":
                checkBoardMove(firstPile, boardPile3)
                break;
            case "boardPile4":
                checkBoardMove(firstPile, boardPile4)
                break;
            case "boardPile5":
                checkBoardMove(firstPile, boardPile5)
                break;
            case "boardPile6":
                checkBoardMove(firstPile, boardPile6)
                break;
            case "boardPile7":
                checkBoardMove(firstPile, boardPile7)
                break;
            case "finalPile1":
                checkFinalMove(firstPile, finalPile1)
                break;
            case "finalPile2":
                checkFinalMove(firstPile, finalPile2)                
                break;
            case "finalPile3":
                checkFinalMove(firstPile, finalPile3)                
                break;
            case "finalPile4":
                checkFinalMove(firstPile, finalPile4)                
                break;
    }
}}



// legal moves

function checkBoardMove(firstPile, secondPile) {
    var firstNumber = firstPile[0];
    var secondNumber = secondPile[0];
    if (secondPile.length === 0) {
        legal(firstPile, secondPile);
    }
    else if (staticCards[firstNumber] === 12 || staticCards[firstNumber] === 25 || staticCards[firstNumber] === 38 || staticCards[firstNumber] === 51 ) {
        illegal();
    }
    else switch (staticCards[firstNumber-1]) {
        case staticCards[firstNumber-1] < 13:
            if (staticCards[secondNumber] === staticCards[firstNumber] + 26 || staticCards[secondNumber] === staticCards[firstNumber] + 39) {
                legal();
            }
            else illegal();
            break;
        case staticCards[firstNumber-1] < 26:
            if (staticCards[secondNumber] === staticCards[firstNumber] + 13 || staticCards[secondNumber] === staticCards[firstNumber] + 26) {
            legal();
        }
            else illegal();
            break;
        case staticCards[firstNumber-1] < 39:
            if (staticCards[secondNumber] === staticCards[firstNumber] -13 || staticCards[secondNumber] === staticCards[firstNumber] - 26) {
            legal();
        }
            else illegal();
            break;
        default:
            if (staticCards[secondNumber] === staticCards[firstNumber] -26 || staticCards[secondNumber] === staticCards[firstNumber] - 39) {
            legal();
        }
            else illegal();
            break;
    }
}

function checkFinalMove(firstPile, secondPile) {
    var firstNumber = firstPile[0];
    var secondNumber = secondPile[0];
    if (secondPile.lenth === 0) {
        legal();
    }
    else if (firstNumber === staticPile[0] || firstNumber === staticPile[13] || firstNumber === staticPile[26] || firstNumber === staticPile[39])
        illegal();

    else if (staticPile[firstNumber] === staticPile[secondNumber+1]) {
        legal();
    }
    else illegal()}
    
function legal(firstPile, secondPile) {
    secondPile.unshift(firstPile.shift());
    firstPile = [];
}
function illegal() {
    firstPile = [];
    console.log("Not a legal move");
}
    

    // board pile to board pile (include empty rules)
    // board pile to final pile
    // deck pile to final pile
    // deck pile to board pile


// reshuffle deck - add click event to empty deck?
function reshuffleDeck() {
    if (deck === []) {
    deck = makeRandom(pile);
    pile = [];
}
    else return;
// remove the click event
}

// win condition

// resest button

// move counter

// timer?

// score?

// save high scores?

// render
