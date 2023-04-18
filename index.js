var readlineSync = require('readline-sync');

var score = 0;

function welcome() {
	var userName = readlineSync.question('what is your name?');
	console.log('Welcome ' + userName + ' to Uttrakhand Quiz!');
}

var questions = [
	{
		question: 'Which is the highest Lord Shiva temple in the world?',
		answer: 'Tungnath',
	},
	{
		question:
			'The oldest National Park in India lies in Uttarakhand. Which is the park?',
		answer: 'Jim Corbett National Park',
	},
	{
		question: 'These are the two rivers that originate in Uttarakhand.',
		answer: 'Ganga and Yamuna',
	},
	{
		question: 'Name the second highest peak in India that lies in Uttarakhand.',
		answer: 'Nanda Devi',
	},
	{
		question: 'Uttarakhand has the tallest dam in India. Which is it?',
		answer: 'Tehri',
	},
];

function play(question, answer) {
	var userAnswer = readlineSync.question(question);

	if (userAnswer.toLowerCase() === answer.toLowerCase()) {
		console.log('right!');
		score = score + 2;
	} else {
		console.log('wrong!');
	}

	console.log('Current score: ', score);
	console.log('-----------------------');
}

function game() {
	for (var i = 0; i < questions.length; i++) {
		var currentQuestion = questions[i];
		play(currentQuestion.question, currentQuestion.answer);
	}
}

function yourScore() {
	if (score >= 3) {
		console.log('YAY! You Scored: ', score);
	} else {
		console.log('You Scored: ', score);
		console.log('Better Luck Next time!');
	}
}

welcome();
game();
yourScore();

var scores = [
	{
		name: 'Sharlet',
		marks: 10,
	},
	{
		name: 'Akshay',
		marks: 9,
	},
	{
		name: 'Steven',
		marks: 8,
	},
	{
		name: 'Raul',
		marks: 8,
	},
];

function displayScore(name, marks) {
	console.log(name, ': ', marks);
}

console.log('-----------------------');
console.log('High Scores: ');

for (var i = 0; i < scores.length; i++) {
	var currentScore = scores[i];
	displayScore(currentScore.name, currentScore.marks);
}

console.log('-----------------------');
