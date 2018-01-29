/*
 The "Game Over" phase
 */


var buttonStyle = {
    fontSize: '16px',
    fill: 'yellow'
};

var gameOverPhase = function (game) {
};

gameOverPhase.prototype = {

    create: function () {

        //  Game background
        game.add.sprite(0, 0, 'sky');

        // Message
        game.add.text(
            game.world.centerX - text_width / 2,
            game.world.centerY,
            'Game over!', {fontSize: '40px', color: 'black'});

        // "Start" Button
        var button = game.add.button(
            game.world.centerX - text_width / 2,
            game.world.centerY + 100,
            'ground', startGame, this);
        button.Text = game.add.text(button.x + 10, button.y + 8, 'New game?', buttonStyle);

    }
};

function startGame() {

    // Switch to "Game" state
    game.state.start('Game')
}