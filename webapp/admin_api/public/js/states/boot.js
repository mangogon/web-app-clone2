/*
 The Boot phase
 */


var bootPhase = function (game) {
};

bootPhase.prototype = {

    preload: function () {

        // Load assets
        game.load.image('sky', 'assets/sky.png');
        game.load.image('ground', 'assets/platform.png');

        // Load database
        $.getJSON('db/database.json', function (data) {
            questions = data;
        });
    },

    create: function () {

        //  Game background
        game.add.sprite(0, 0, 'sky');

        // Game title
        game.add.text(100, 100, 'Welcome to my super-duper Quizzzzz!!!');

        // Start button
        var buttonStart = game.add.button(100, 200, 'ground', startGame, this);
        buttonStart.Text = game.add.text(buttonStart.x + 10, buttonStart.y + 8, 'Start');

    }
};

function startGame() {

    // Switch to "Game" state
    game.state.start('Game')
}