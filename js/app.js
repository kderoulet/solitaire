$(function() {

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
var faceUp = [];
var boardPile1Group = [];
var boardState1 = [];
var boardState2 = [];
var boardState3 = [];
var boardState4 = [];
var boardState5 = [];
var boardState6 = [];
var boardState7 = [];

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
    render();
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

// moving cards click events
// document.querySelector(".boardPile").children.addEventListener("click", handleClick);
// document.querySelectorAll(".deck").addEventListener("click", handleClick);
// document.querySelectorAll(".deckPile").addEventListener("click", handleClick);
// document.querySelectorAll(".boardPile1").addEventListener("click", handleClick);
// document.querySelectorAll(".boardPile2").addEventListener("click", handleClick);
// document.querySelectorAll(".boardPile3").addEventListener("click", handleClick);
// document.querySelectorAll(".boardPile4").addEventListener("click", handleClick);
// document.querySelectorAll(".boardPile5").addEventListener("click", handleClick);
// document.querySelectorAll(".boardPile6").addEventListener("click", handleClick);
// document.querySelectorAll(".boardPile7").addEventListener("click", handleClick);

boardPile1Group = document.querySelectorAll(".boardPile1");
boardPile1Group.forEach(function() {
    this.addEventListener("click", handleClick);
})



function handleClick(evt) {
    if (firstPile.length === 0) {
        switch (evt.target.class) {
            case "deck":
                if (deck.length === 0) {
                    reshuffleDeck();
                }
                else {deckPile.unshift(deck.shift());
                console.log(deck)}               
            break;
            case "deckPile":
            // firstPile = deckPile.substr(0, x) where x is location of clicked target
                firstPile = deckPile;
                console.log(firstPile);
                break;
            case "boardPile1":
                firstPile = boardPile1;
                console.log(firstPile);
                break;
            case "boardPile2":
                firstPile = boardPile2;
                console.log(firstPile)                                
                break;
            case "boardPile3":
                firstPile = boardPile3;
                console.log(firstPile)                                                
                break;
            case "boardPile4":
                firstPile = boardPile4;
                console.log(firstPile)                                                
                break;
            case "boardPile5":
                firstPile = boardPile5;
                console.log(firstPile)                                                
                break;
            case "boardPile6":
                firstPile = boardPile6;
                console.log(firstPile)                                                
                break;
            case "boardPile7":
                firstPile = boardPile7;
                console.log(firstPile)                                                
                break;
            case "finalPile1":
                firstPile = boardPile1;
                break;
            case "finalPile2":
                firstPile = boardPile2;
                break;
            case "finalPile3":
                firstPile = boardPile3;
                break;
            case "finalPile4":
                firstPile = boardPile4;
                break;
    }}
    else {
        switch (evt.target.class) {
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
    var firstNumber = firstPile[firstPile.length-1];
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
    var firstNumber = firstPile[firstPile.length-1];
    var secondNumber = secondPile[0];
    if (secondPile.lenth === 0) {
        legal();
    }
    else if (firstNumber === staticCards[0] || firstNumber === staticCards[13] || firstNumber === staticCards[26] || firstNumber === staticCards[39])
        illegal();

    else if (staticCards[firstNumber] === staticCards[secondNumber+1]) {
        legal();
    }
    else illegal()}
    
function legal(firstPile, secondPile) {
    for (var i = firstPile.length; i > 0; i--)
    {secondPile.unshift(firstPile[i-1]);}
    secondPile.unshift("placeholder");
    switch (firstPile) {
    // deckPile.substr(0, firstPile.length)
        case deckPile.substr(0, firstPile.length): 
            for (var i = firstPile.length; i > 0; i--) 
                {deckPile.shift()}
        break;
        case boardPile1.substr(0, firstPile.length): 
            for (var i = firstPile.length; i > 0; i--) 
                {boardPile1.shift()}
        break;
        case boardPile2.substr(0, firstPile.length): 
            for (var i = firstPile.length; i > 0; i--)
                {boardPile2.shift()}
        break;
        case boardPile3.substr(0, firstPile.length): 
            for (var i = firstPile.length; i > 0; i--)
                {boardPile3.shift()}
        break;
        case boardPile4.substr(0, firstPile.length): 
            for (var i = firstPile.length; i > 0; i--) {
                boardPile4.shift()}
        break;
        case boardPile5.substr(0, firstPile.length): 
            for (var i = firstPile.length; i > 0; i--) {
                boardPile5.shift()}
        break;
        case boardPile6.substr(0, firstPile.length): 
            for (var i = firstPile.length; i > 0; i--)
                {boardPile6.shift()}
        break;
        case boardPile7.substr(0, firstPile.length): 
            for (var i = firstPile.length; i > 0; i--)
                {boardPile7.shift()}
        break;
        case finalPile1.substr(0, firstPile.length): 
            for (var i = firstPile.length; i > 0; i--) {
                finalPile1.shift()}
        break;
        case finalPile2.substr(0, firstPile.length): 
            for (var i = firstPile.length; i > 0; i--) {
                finalPile2.shift()}
        break;
        case finalPile3.substr(0, firstPile.length): 
            for (var i = firstPile.length; i > 0; i--)
                {finalPile3.shift()}
        break;
        case finalPile4.substr(0, firstPile.length): 
            for (var i = firstPile.length; i > 0; i--)
                {finalPile4.shift()}
        break;
    }
    firstPile = [];
    secondPile.shift();
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
    if (deck.length === 0) {
    deck = makeRandom(pile);
    pile = [];
}
    else return;
// remove the click event
}

// win condition
function checkWin() {
    if ((finalPile1[0] === staticCards[12] || finalPile1[0] === staticCards[25] || finalPile1[0] === staticCards[38] || finalPile1[0] === staticCards[51]) && (finalPile2[0] === staticCards[12] || finalPile2[0] === staticCards[25] || finalPile2[0] === staticCards[38] || finalPile2[0] === staticCards[51]) && (finalPile3[0] === staticCards[12] || finalPile3[0] === staticCards[25] || finalPile3[0] === staticCards[38] || finalPile3[0] === staticCards[51]) && (finalPile4[0] === staticCards[12] || finalPile4[0] === staticCards[25] || finalPile4[0] === staticCards[38] || finalPile4[0] === staticCards[51])) {
        console.log("You win!");
    }
    else return;
}

// resest button

// move counter

// timer?

// score?

// save high scores?

function renderImages() {
    for (var i = 0; i < boardPile1.length; i++) {
        boardPile1[i]
    }

}

function renderDeck() {
    if (deck.length > 0) {
        $('.deck').addClass('card').addClass('back-red');
    }
    else $(".deck").removeClass('back-red').html("reshuffle?")
}

//  render from last to first, if tr 1 is taken, go tr 2
function renderPiles() {
    if (boardPile1.length > 0); {
        boardState1 = $('.boardPile1');
        console.log(boardPile1)
        for (var i = 0; i < boardState1.length; i++){
            renderCard(boardState1[i], boardPile1[i])}
            console.log(boardPile1[0])
            }
    if (boardPile2.length > 0); {
        boardState2 = $('.boardPile2');
        console.log(boardPile2)
        for (var i = 0; i < boardState1.length; i++)
            if (boardPile2[boardPile2.length-1] !== undefined) {
                renderCard(boardState2[i], boardPile2[i])
                console.log(boardPile2[0])                
            }}                                   
    if (boardPile3.length > 0); {
        boardState3 = $('.boardPile3');
        console.log(boardPile3)
        for (var i = 0; i < boardState3.length; i++)
            if (boardPile3[boardPile3.length-1] !== undefined) {
                renderCard(boardState3[i], boardPile3[i])
                console.log(boardPile3[0])                
                
            }}
    if (boardPile4.length > 0); {
        boardState4 = $('.boardPile4');
        console.log(boardPile4)
        for (var i = 0; i < boardState1.length; i++)
            if (boardPile4[boardPile4.length-1] !== undefined) {
                renderCard(boardState4[i], boardPile4[i])
                console.log(boardPile4[0])                
                
            }}
    if (boardPile5.length > 0); {
        boardState5 = $('.boardPile5');
        console.log(boardPile5)        
        for (var i = 0; i < boardState5.length; i++)
            if (boardPile5[boardPile5.length-1] !== undefined) {
                renderCard(boardState5[i], boardPile5[i])
                console.log(boardPile5[0])                
                
            }}
    if (boardPile6.length > 0); {
        boardState6 = $('.boardPile6');
        console.log(boardPile6)        
        for (var i = 0; i < boardState6.length; i++)
            if (boardPile6[boardPile6.length-1] !== undefined) {
                renderCard(boardState6[i], boardPile6[i])
                console.log(boardPile6[0])                
                
            }}
    if (boardPile7.length > 0); {
        boardState7 = $('.boardPile7');
        console.log(boardPile7)
        for (var i = 0; i < boardState7.length; i++)
            if (boardPile7[boardPile7.length-1] !== undefined) {
                renderCard(boardState7[i], boardPile7[i])
                
            }}
            
    };
function flipFirstCard() {
    if (deckPile.length > 0) {
        $('deckPile').addClass('faceUp')}
    else {$('deckPile').removeClass('faceUp')};
    if (boardPile1.length > 0); {
        $(boardState1[boardPile1.length-1]).addClass('faceUp')};
    if (boardPile2.length > 0); {
        $(boardState2[boardPile2.length-1]).addClass('faceUp')};
    if (boardPile3.length > 0); {
        $(boardState3[boardPile3.length-1]).addClass('faceUp')}
    if (boardPile4.length > 0); {
        $(boardState4[boardPile4.length-1]).addClass('faceUp')}
    if (boardPile5.length > 0); {
        $(boardState5[boardPile5.length-1]).addClass('faceUp')}
    if (boardPile6.length > 0); {
        $(boardState6[boardPile6.length-1]).addClass('faceUp')}
    if (boardPile7.length > 0); {
        $(boardState7[boardPile7.length-1]).addClass('faceUp')}};

function renderFaceDowns() {  
for (var i = 0; i < boardPile1.length; i++)
    if ($(boardState1[i]).hasClass('faceUp' || 'empty' || 'back-red'))
        {console.log("Yay!")}
    else {$(boardState1[i]).addClass('back-red')}
for (var i = 0; i < boardPile2.length; i++)
    if ($(boardState2[i]).hasClass('faceUp' || 'empty' || 'back-red'))
        {console.log("Yay!")}
    else {$(boardState2[i]).addClass('back-red')}
for (var i = 0; i < boardPile3.length; i++)
    if ($(boardState3[i]).hasClass('faceUp' || 'empty' || 'back-red'))
        {console.log("Yay!")}
    else {$(boardState3[i]).addClass('back-red')}
for (var i = 0; i < boardPile4.length; i++)
    if ($(boardState4[i]).hasClass('faceUp' || 'empty' || 'back-red'))
        {console.log("Yay!")}
    else {$(boardState4[i]).addClass('back-red')}
for (var i = 0; i < boardPile5.length; i++)
    if ($(boardState5[i]).hasClass('faceUp' || 'empty' || 'back-red'))
        {console.log("Yay!")}
    else {$(boardState5[i]).addClass('back-red')}
for (var i = 0; i < boardPile6.length; i++)
    if ($(boardState6[i]).hasClass('faceUp' || 'empty' || 'back-red'))
        {console.log("Yay!")}
    else {$(boardState6[i]).addClass('back-red')}
for (var i = 0; i < boardPile7.length; i++)
    if ($(boardState7[i]).hasClass('faceUp' || 'empty' || 'back-red'))
        {console.log("Yay!")}
    else {$(boardState7[i]).addClass('back-red')}
}

// Ace: 0, king: 12 
// 0-12: hearts, 13-25:diamonds, 26-38:spades, 39-52:clubs
//feedinstaticcards[i]
function renderCard(pile, num) {
// if ($(pile).css({}).includes('faceUp') === true)
    switch(num) {
    case 0: $(pile).addClass('hA');
        break;
    case 1: $(pile).addClass('h02');
        break;
    case 2: $(pile).addClass('h03');
        break;
    case 3: $(pile).addClass('h04');
        break;
    case 4: $(pile).addClass('h05');
        break;
    case 5: $(pile).addClass('h06');
        break;
    case 6: $(pile).addClass('h07');
        break;
    case 7: $(pile).addClass('h08');
        break;
    case 8: $(pile).addClass('h09');
        break;
    case 9: $(pile).addClass('h10');
        break;
    case 10: $(pile).addClass('hJ');
        break;
    case 11: $(pile).addClass('hQ');
        break;
    case 12: $(pile).addClass('hK');
        break;
    case 13: $(pile).addClass('dA');
        break;
    case 14: $(pile).addClass('d02');
        break;
    case 15: $(pile).addClass('d03');
        break;
    case 16: $(pile).addClass('d04');
        break;
    case 17: $(pile).addClass('d05');
        break;
    case 18: $(pile).addClass('d06');
        break;
    case 19: $(pile).addClass('d07');
        break;
    case 20: $(pile).addClass('d08');
        break;
    case 21: $(pile).addClass('d09');
        break;
    case 22: $(pile).addClass('d10');
        break;
    case 23: $(pile).addClass('dJ');
        break;
    case 24: $(pile).addClass('dQ');
        break;
    case 25: $(pile).addClass('dK');
        break;
    case 26: $(pile).addClass('sA');
        break;
    case 27: $(pile).addClass('s02');
        break;
    case 28: $(pile).addClass('s03');
        break;
    case 29: $(pile).addClass('s04');
        break;
    case 30: $(pile).addClass('s05');
        break;
    case 31: $(pile).addClass('s06');
        break;
    case 32: $(pile).addClass('s07');
        break;
    case 33: $(pile).addClass('s08');
        break;
    case 34: $(pile).addClass('s09');
        break;
    case 35: $(pile).addClass('s10');
        break;
    case 36: $(pile).addClass('sJ');
        break;
    case 37: $(pile).addClass('sQ');
        break;
    case 38: $(pile).addClass('sK');
        break;
    case 39: $(pile).addClass('cA');
        break;
    case 40: $(pile).addClass('c02');
        break;
    case 41: $(pile).addClass('c03');
        break;
    case 42: $(pile).addClass('c04');
        break;
    case 43: $(pile).addClass('c05');
        break;
    case 44: $(pile).addClass('c06');
        break;
    case 45: $(pile).addClass('c07');
        break;
    case 46: $(pile).addClass('c08');
        break;
    case 47: $(pile).addClass('c09');
        break;
    case 48: $(pile).addClass('c10');
        break;
    case 49: $(pile).addClass('cJ');
        break;
    case 50: $(pile).addClass('cQ');
        break;
    case 51: $(pile).addClass('cK');
        break;}
// else {$(pile).addClass('back-red')}
if (num === undefined) {
    $(pile).addClass('empty');
}
else {$(pile).removeClass('empty')}
}

// render
function render() {
    checkWin();
    renderPiles();    
    flipFirstCard();    
    renderImages();
    renderDeck();
    renderFaceDowns();
}

init();
})
