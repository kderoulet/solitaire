# Solitaire 
### by Kevin de Roulet

![](/images/gameplay.png)
[Check out the Trello](https://trello.com/b/2r5HTP91/solitaire)

## Technologies Used
- HTML
- CSS
- JavaScript
- Jquery

## Getting Started 

The game can be found [here](https://kderoulet.github.io/solitaire/). 

The object of the game is to get a king in each of the four piles up top. To do this, those piles must be built from Ace to King, all of the same suit. Any face-up card on the board can be moved by clicking on the card and then clicking where you want it to go, and face-down cards flip over when there are no cards ahead of them. Stacks on the board must be built from King to Ace in alternating color sort (i.e. Red King, Black Queen, Red Jack, etc.).

You can draw from the deck as many times as you want, and the pile next to it flips over to replace the deck when it's empty. 

The maximum possible number of points one can get is 1300 (25 points per card in one of the final stacks). However, one can always try to beat previous records by getting to 1300 in fewer moves. 

## Major Features

### The Board Setup

The board set-up is handled by the 'init' function. Much of the board set-up is contingent upon the deck shuffling feature:

```js
function makeRandom(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
```

Adapted from stack overflow, this is a JavaScript rendering of the Durstenfeld Shuffle, which is a version of the Fisher-Yates algorithm. The function selects a random value in the array and switches its position with the last value in the array. On the next loop, the randomizer excludes the last value in the array from the random selection. The result is an extremely fast method of randomizing an array. 

So, given a 5-length array of [0, 1, 2, 3, 4], console.logging the array every cycle, we might get the following results:

![](/images/randomizer.png)

Our function chooses a random number and switches it with the number at the very end, excluding the last digit on the next go-round. When finished, the final remaining value is assigned to the [0] value of the array. It thus builds a stack from the bottom up of random values in our array. After this randomization, we shift from this randomized 52-length array to build the arrays behind the 7 starting piles on the board. 

### The Card Movement Math

Since each card is represented by a number in an array rather than each card being given a number of attributes (color, suit, etc.), the math is fairly simple for determining legal moves. Each suit has 13 cards, from Ace (0) to King (12). So in the array, 0-12 represents hearts, 13-25 represents diamonds, 26-38 represents spades, and 39-51 represents clubs.

```js
function checkBoardMove(firstPile, secondPile) {
    if (secondPile.length === 0) {
        legal(firstPile, secondPile);
    }
    else if (firstPile[firstPile.length-1] === 12 || firstPile[firstPile.length-1] === 25 || firstPile[firstPile.length-1] === 38 || firstPile[firstPile.length-1] === 51 ) {
        illegal();
    }
        else if (firstPile[firstPile.length-1] < 13) {
            if (secondPile[0] === firstPile[firstPile.length-1] + 27 || secondPile[0] === firstPile[firstPile.length-1] + 40) {
                legal(firstPile, secondPile);
            }
            else illegal()}
        else if (firstPile[firstPile.length-1] < 26) {
            if (secondPile[0] === firstPile[firstPile.length-1] + 14 || secondPile[0] === firstPile[firstPile.length-1] + 27) {
                legal(firstPile, secondPile);
            }
            else illegal()}
        else if (firstPile[firstPile.length-1] < 39) {
            if (secondPile[0] === firstPile[firstPile.length-1] - 12 || secondPile[0] === firstPile[firstPile.length-1] - 25) {
                legal(firstPile, secondPile);
            }
            else illegal()}
        else if (firstPile[firstPile.length-1] < 52) {
            if (secondPile[0] === firstPile[firstPile.length-1] - 25 || secondPile[0] === firstPile[firstPile.length-1] - 38) {
                legal(firstPile, secondPile);
            }
            else illegal()}  
    }
```
So the function first rules out kings; unless the receiving pile is empty, moving a king is not a legal move. Once the function knows that it's not a king being moved, it checks for suit (whether the number is below 13, 26, 39, or 52), and it checks to see whether or not the card is being placed on a card 1 above it of the opposite color. 

The function for checking a move on the final piles is even more simple; because cards can only go with other cards of the same suit, the function checks for aces and then allows any card that's 1 above the current card in the pile. 

### Rendering

As noted above, all of the cards are represented in a single unchanging array. So, by comparing the values of the arrays representing the board state with the values in the unchanging array, the game renders the correct card being represented by each number in the array. We also have a few additional classes which are used to determine precisely what should be rendered; the 'empty' class is used for empty slots, so a card with 0 opacity is rendered; the 'faceUp' class is used for cards which should be shown to the player, rendering the corresponding face-up card; and the 'back-red' class is used for cards which are meant to appear face-down to the player. 

Currently the largest function in the JS is for accessing the correct value(s) from a mouse click. There are potentially 112 different places that a card might be placed on the main board, and so for whichever is clicked, the function selects the correct array through its start; for instance, in a pile of 7 cards, if one clicks the third, then [2], [1], and [0] are added to a temporary array for legal move-checking. 

### Responsive Design

This solitaire webapp is coded for mobile first; its default styling is for small screens, and it has a media query with styling for screens at least 540px wide. The click events which run the functionality of the game transfer especially well to the mobile platform. 

## Next Steps

It might be worthwhile to add more game modes. Some variants of solitaire allow draw 3 in exchange for more points per card in the final piles; although this would require some CSS reworking, this is a somewhat reasonable feature that could be added. Some individuals also might prefer a 'casino mode' with money instead of points and a limited number of deck recycles. 

Finally, there could conceivably be a variety of backgrounds other than the traditional casino green. This would only take a little JS/CSS, and it would allow greater user customization. The options for these CSS changes could be handled by an options menu so as to keep the main display clean.