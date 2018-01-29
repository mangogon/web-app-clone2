const mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Question = require('../models/question');

class QuestionsRepository {

	// get all the customers
	getQuestions(callback) {
		console.log('*** QuestionsRepository.getQuestions');

		Question.find({}, (err, questions) => {
			if (err) {
				console.log(`*** QuestionsRepository.getQuestions error: ${err}`);
				return callback(err);
			}
			callback(null, {
				questions: questions
			});
		});
	}

	// get a  question
	getQuestion(id, callback) {
		console.log('*** QuestionsRepository.getQuestion');
		Question.findById(id, (err, question) => {
			if (err) {
				console.log(`*** QuestionsRepository.getQuestion error: ${err}`);
				return callback(err);
			}
			callback(null, question);
		});
	}

	// insert a question
	insertQuestion(body, callback) {
		console.log('*** QuestionsRepository.insertQuestion');
		let question = new Question();

		question.id = body.id;
		question.text = body.text;
		question.character = body.character;
		question.case = body.case;
		question.type = body.type;
		question.crazy = body.crazy;
		question.options = body.options;

		question.save((err, question) => {
			if (err) {
				console.log(`*** QuestionsRepository insertQuestion error: ${err}`);
				return callback(err, null);
			}

			callback(null, question);
		});
	}

	updateQuestion(id, body, state, callback) {
		console.log('*** QuestionsRepository.editQuestion');

		Question.findById(id, (err, question) => {
			if (err) {
				console.log(`*** QuestionsRepository.editQuestion error: ${err}`);
				return callback(err);
			}

			question.text = body.text;
			question.character = body.character;
			question.case = body.case;
			question.type = body.type;
			question.crazy = body.crazy;
			question.options = body.options;

			question.save((err, question) => {
				if (err) {
					console.log(`*** QuestionsRepository.updateQuestion error: ${err}`);
					return callback(err, null);
				}

				callback(null, question);
			});

		});
	}

	// delete a customer
	deleteQuestion(id, callback) {
		console.log('*** QuestionsRepository.deleteQuestion');
		Question.remove({'id': id}, (err, question) => {
			if (err) {
				console.log(`*** QuestionsRepository.deleteQuestion error: ${err}`);
				return callback(err, null);
			}
			callback(null, question);
		});
	}

}

module.exports = new QuestionsRepository();
