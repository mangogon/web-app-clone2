/*
 The Game phase
 */


// Dimensions of the blocks
var text_width = 400,
    text_height = 300,
    button_spacing = 20;

// Text styles
var questionStyle = {
        font: "16px Arial",
        fill: "white",
        align: "left",
        boundsAlignH: "left",
        boundsAlignV: "top",
        wordWrap: true, wordWrapWidth: 300
    },
    scoresStyle = {
        fontSize: '20px',
        fill: 'black'
    },
    buttonStyle = {
        fontSize: '16px',
        fill: 'yellow'
    };

var question,
    questionBlock,
    button1,
    button2;

var moraleText,
    moneyText;


var gamePhase = function (game) {
};

gamePhase.prototype = {

    create: function () {

        // Reset game morale
        morale = 0;

        //  Game background
        game.add.sprite(0, 0, 'sky');

        // Block for questions
        questionBlock = game.add.tileSprite(
            game.world.centerX - text_width / 2,
            game.world.centerY - text_height / 2,
            text_width, text_height, 'ground');

        questionBlock.Text = game.add.text(questionBlock.x + 20, questionBlock.y + 20,
            'Hello, this is the text of the question I want to ask you, please could you be so kind as to reply?',
            questionStyle);

        // Buttons

        // Horizontal scaling factor for buttons
        var button_scale_x = (text_width - button_spacing) / 2 /400;

        button1 = game.add.button(
            game.world.centerX - text_width / 2,
            game.world.centerY + text_height / 2 + button_spacing,
            'ground', onClick, this);
        button1.name = 'a';
        button1.scale.setTo(button_scale_x, 1);
        button1.Text = game.add.text(button1.x + 10, button1.y + 8, 'Yes', buttonStyle);

        button2 = game.add.button(
            game.world.centerX + button_spacing / 2,
            game.world.centerY + text_height / 2 + button_spacing,
            'ground', onClick, this);
        button2.name = 'b';
        button2.scale.setTo(button_scale_x, 1);
        button2.Text = game.add.text(button2.x + 10, button2.y + 8, 'No', buttonStyle);

        // The scores
        moraleText = game.add.text(16, 16, '', scoresStyle);
        moneyText = game.add.text(316, 16, '', scoresStyle);
        refreshScores();

        // Start of the game: pick a question
        nextQuestion();
    }

};

// Pick a random question and display it
function nextQuestion() {

    // Load a random question and display it
    question = questions[Math.floor(Math.random() * questions.length)];

    questionBlock.Text.text = question.text;
    button1.Text.text = question.options.a.label;
    button2.Text.text = question.options.b.label;

}

// Refresh scores
function refreshScores() {
    moraleText.text = 'Morale: ' + morale;
    moneyText.text = 'Money: $' + money;
}

function onClick(item) {

    // Display congratulations message

    // New scores
    var values = question.options[item.name].values;
    morale += values.morale;
    money += values.money;
    refreshScores();

    // Test if game over
    if (morale <= -3) {
        game.state.start('GameOver');
    }

    // else
    nextQuestion();

}
