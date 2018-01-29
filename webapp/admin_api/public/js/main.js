/*
 Quiz Game, v2
*/

var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

// Globals

var questions;  // The questions database

var morale = 0,
    money = 0;

// Game states
game.state.add('Boot', bootPhase);
game.state.add('Game', gamePhase);
game.state.add('GameOver', gameOverPhase);

// Start !!!!
game.state.start('Boot');
