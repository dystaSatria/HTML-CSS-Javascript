# XOXO Game

This is a simple implementation of the XOXO (Tic-Tac-Toe) game using HTML, CSS, and JavaScript.

## Overview

The XOXO Game allows two players to take turns and marks their moves on a 3x3 grid. The game checks for a winning condition or a tie after each move.

## How to Play

1. Open the `index.html` file in a web browser.
2. The game board consists of 3x3 boxes.
3. Players take turns by clicking on an empty box to mark their move.
4. The game will display an alert if a player wins or if it's a tie.
5. Reload the page to start a new game.

## Code Structure

- `index.html`: HTML file defining the structure of the game.
- `style.css`: CSS file for styling the game layout.
- `script.js`: JavaScript file containing the game logic.

## Game Logic

- The game uses a simple array to represent the board state.
- Players alternate turns between "X" and "O".
- The `makeMove` function handles player moves and checks for a win or tie.
- The `checkWin` function verifies if a player has won by checking various winning combinations.
- The `checkTie` function checks for a tie when all boxes are filled.

Feel free to explore and modify the code to enhance or customize the game as needed.
