const questionsRepo = require('../../../lib/questionsRepository'),
      util = require('util');

class QuestionsController {

    constructor(router) {
        router.get('/', this.getQuestions.bind(this));
        router.get('/:id', this.getQuestion.bind(this));
        router.post('/', this.insertQuestion.bind(this));
        router.put('/:id', this.updateQuestion.bind(this));
        router.delete('/:id', this.deleteQuestion.bind(this));
    }

    getQuestions(req, res) {
        console.log('*** getQuestions');
        questionsRepo.getQuestions((err, data) => {
            if (err) {
                console.log('*** getQuestions error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getQuestions ok');
                res.json(data.questions);
            }
        });
    }
    
    getQuestion(req, res) {
        console.log('*** getQuestion');
        const id = req.params.id;
        console.log(id);

        questionsRepo.getQuestion(id, (err, question) => {
            if (err) {
                console.log('*** getQuestion error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getQuestion ok');
                res.json(question);
            }
        });
    }

    insertQuestion(req, res) {
        console.log('*** insertQuestion');
        
        questionsRepo.insertQuestion(req.body, (err, question) => {
            if (err) {
                console.log('*** questionsRepo.insertQuestion error: ' + util.inspect(err));
                res.status(400).json({status: false, error: util.inspect(err), question: null});
            } else {
                console.log('*** insertQuestion ok');
                res.json({ status: true, error: null, question: question });
            }
        });
    }

    updateQuestion(req, res) {
        console.log('*** updateQuestion');
        console.log('*** req.body');
        console.log(req.body);

        if (!req.body) {
            throw new Error('Question required');
        }

        questionsRepo.updateQuestion(req.params.id, req.body, (err, question) => {
            if (err) {
                console.log('*** updateQuestion error: ' + util.inspect(err));
                res.json({ status: false, error: 'Update failed', question: null });
            } else {
                console.log('*** updateQuestion ok');
                res.json({ status: true, error: null, question: question });
            }
        });
    }

    deleteQuestion(req, res) {
        console.log('*** deleteQuestion');

        questionsRepo.deleteQuestion(req.params.id, (err) => {
            if (err) {
                console.log('*** deleteQuestion error: ' + util.inspect(err));
                res.json({ status: false });
            } else {
                console.log('*** deleteQuestion ok');
                res.json({ status: true });
            }
        });
    }

}

module.exports = QuestionsController;
