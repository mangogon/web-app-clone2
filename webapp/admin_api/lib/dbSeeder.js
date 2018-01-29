// Module dependencies
const mongoose = require('mongoose'),
	Question = require('../models/question'),
	dbConfig = require('./configLoader').databaseConfig,
	connectionString = `mongodb://${dbConfig.host}/${dbConfig.database}`,
	connection = null;

class DBSeeder {

	init() {
		mongoose.connection.db.listCollections({name: 'questions'})
			.next((err, collinfo) => {
				if (!collinfo) {
					console.log('Starting dbSeeder...');
					this.seed();
				}
			});
	}

	seed() {

		console.log('Seeding data....');

		//Questions
		let ids = [
			"P1",
			"C1",
			"E1",
			"P2",
			"E2",
			"M1",
			"P3",
			"C2",
			"S1",
			"R1",
			"R2",
			"C3",
			"S2",
			"P2"
		];

		let questionActor =
			[
				"team member",
				"HR",
				"IT",
				"Team member",
				"IT",
				"CEO",
				"Team Member",
				"HR",
				"Account Mgr.",
				"Recruiting",
				"Recruiting",
				"HR",
				"Account Mgr.",
				"team member"
			];

		let type =
			[
				"project",
				"company",
				"environment",
				"Project",
				"environment",
				"management",
				"project",
				"company",
				"management",
				"company",
				"company",
				"company",
				"management",
				"project",
			];

		let crazy =
			[
				"N",
				"N",
				"N",
				"N",
				"Y",
				"Y",
				"N",
				"Y",
				"Y",
				"Y",
				"Y",
				"Y",
				"Y",
				"N",
			];

		let cases = [
			"monitor request",
			"fire people",
			"IT makes work hard",
			"crazy project change",
			"crazy access to env",
			"weird request",
			"salary request",
			"having an affair",
			"change of title",
			"junior",
			"janitor",
			"hookers",
			"client request",
			"re-architect"
		];


		let questionsBody = [
			"I need a second monitor!",
			"We need to fire people because of company optimization",
			"We will introduce new policty regarding access to corporate network!",
			"Client just provided a new set of requirements after our demo, where we agreed to existing ones!",
			"IT want's everybody to run a blood test before letting anybody into the network?",
			"Please make me a coffee",
			"Hey! I want bigger salary!",
			"Designer and Architect having an love affair, what shall we do?",
			"Account Manager want's to change your title to Slave Leader to better represent your role",
			"Recruiting provided a candidate who likes pineapple pizza, what shall we do?",
			"Company janitor says he know how to program and he even programmed TV set to turn off at 10pm",
			"We need animators for team building!",
			"Client wants to do a demo at 2am because he can't sleep?",
			"Team member want's to re-architect the system because he wants to try out a new design pattern"
		];

		let options;

		Question.remove({});

		let l = questionActor.length;

		for (let i = 0; i < l; i++) {
			var question = new Question({
				'id': ids[i],
				'text': questionsBody[i],
				'character': questionActor[i],
				'case': cases[i],
				'type': type[i],
				'crazy': crazy[i],
				'options': {

				}
			});

			question.save((err, q) => {
				if (err) {
					console.log(err);
				} else {
					console.log('inserted question: ' + q.id);
				}
			});
		}
	}
}

module.exports = new DBSeeder();




