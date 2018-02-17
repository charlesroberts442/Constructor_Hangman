/***********************************************************************
 * Copyright (c) 2018 Charles W. Roberts
 * All Rights Reserved
 *
 * No portion of this code may be copied or modified without the
 * prior written permission of Charles Roberts.
 *
 ***********************************************************************/

// dependency for npm packages
var inquirer       = require("inquirer");
var Word           = require("./Word");
var WordCollection = require("./WordCollection");
var GuessSet       = require("./GuessSet");
var Letter         = require("./Letter");

/**
 * getHint returns the hint for the artist
 * @return {String} The hint for the artist
 */
Word.prototype.getHint = function()
{
	return hint;
};

/**
 * currentWord is the object representing the current artist
 * @type {Object}
 */
let currentWord      = {};

/**
 * currentGuessSet is an object holding all the current letters
 * that have been guessed.
 * @type {Object}
 */
let currentGuessSet  = {};

/**
 * wrongGuesses is the count of wrong guesses in a round of 
 * the hangman game.
 * @type {Number}
 */
let wrongGuesses     = 0;

/**
 * firstTime A Boolean that is used to suppress the 
 * previous guesses being printed in the first pass 
 * of the game.
 * @type {Boolean}
 */
let firstTime        = true;

/**
 * meEntertainYou is a variable that serves no purpose
 * other than letting me make a bad pun.  I hope whoever
 * grades this assignment gets a bit of a chuckle out of
 * this.
 * @type {String}
 */
let meEntertainYou   = "A Really Bad Pun";

/**
 * drawGallows is a procedure that draws the hangman
 * gallows for the different numbers of guesses that
 * have been made, and returns false when the maximum
 * number of bad guesses have been made.
 * @param  {Integer} number The number of bad guesses so far
 * @return {Boolean}        false when the player has lost; true otherwise
 */
function drawGallows(number)
{
	let retValue = true;
	switch(number)
	{

		case 0:
			console.log("_____________");
			console.log("  |/      |");
			console.log("  |");
			console.log("  |");
			console.log("  |");
			console.log("  |");
			console.log("  |");
			console.log("__|__________");
			break;

		case 1:
			console.log("_____________");
			console.log("  |/      |");
			console.log("  |      (_)");
			console.log("  |");
			console.log("  |");
			console.log("  |");
			console.log("  |");
			console.log("__|__________");
			break;

		case 2:
			console.log("_____________");
			console.log("  |/      |");
			console.log("  |      (_)");
			console.log("  |       |");
			console.log("  |");
			console.log("  |");
			console.log("  |");
			console.log("__|__________");
			break;

		case 3:
			console.log("_____________");
			console.log("  |/      |");
			console.log("  |      (_)");
			console.log("  |       |/");
			console.log("  |");
			console.log("  |");
			console.log("  |");
			console.log("__|__________");
			break;

		case 4:
			console.log("_____________");
			console.log("  |/      |");
			console.log("  |      (_)");
			console.log("  |      \\|/");
			console.log("  |");
			console.log("  |");
			console.log("  |");
			console.log("__|__________");
			break;

		case 5:
			console.log("______________");
			console.log("  |/      |");
			console.log("  |      (_)");
			console.log("  |      \\|/");
			console.log("  |       |");
			console.log("  |");
			console.log("  |");
			console.log("__|__________");
			break;

		case 6:
			console.log("_____________");
			console.log("  |/      |");
			console.log("  |      (_)");
			console.log("  |      \\|/");
			console.log("  |       |");
			console.log("  |      / ");
			console.log("  |");
			console.log("__|__________");
			break;

		case 7:
			console.log("_____________");
			console.log("  |/      |");
			console.log("  |      (_)");
			console.log("  |      \\|/");
			console.log("  |       |");
			console.log("  |      / \\ ");
			console.log("  |");
			console.log("__|__________");
			retValue = false;
			break;

	} // End of switch statement

	return retValue;	

} // End of drawGallows()

/**
 * doContinue wraps the inquirer prompt presentation of 
 * whether or not to continue the game.
 *  
 */
function doContinue()
{
	let questionOne = 
	{
		name: "yesOrNo",
    	message: "Do you want to play another round? yes/No"
	};
	let promptSet = [questionOne];

	/**
	 * handlePromptError is the error handling callback 
	 * routine for the inquirer prompt.
	 * @param  {Object} err The error to be handled.
	 */
	function handlePromptError(err)
	{
		console.log("There was a prompt error.");
		console.log(err);
	}

	/**
	 * processAnswers processes the answer to the inquirer
	 * prompt presentation of whether or not to play another
	 * game of hangman.
	 * @param  {Object} answers The user's answers.
	 */
	function processAnswers(answers)
	{
		
		yonAnswer = answers.yesOrNo.toUpperCase().trim();
		if ( ("Y" === yonAnswer)   ||
			 ("YES" === yonAnswer) )
		{
			initializeSession();
			doGuess();
		}
	}

	inquirer.prompt(promptSet).
	  then(processAnswers ).
	  catch(handlePromptError);

} // End of doContinue()

/**
 * doGuess wraps the inquirer prompt presentation of 
 * getting the players guesses and responding to the
 * guesses.
 */
function doGuess()
{
	let shouldContinue = false;
	let questionOne = 
	{
		name: "letter",
    	message: "What letter is your guess?"
	};

	let promptSet = [questionOne];
	
	/**
	 * handlePromptError is the error handling callback 
	 * routine for the inquirer prompt.
	 * @param  {Object} err The error to be handled.
	 */
	function handlePromptError(err)
	{
		console.log("There was a prompt error.");
		console.log(err);
	}

	/**
	 * processAnswers processes the answer to the inquirer
	 * prompt presentation of guessing a letter in 
	 * the hangman game.
	 * @param  {Object} answers The user's answers.
	 */
	function processAnswers(answers)
	{
		if(currentGuessSet.hasLetter(answers.letter) === false)
		{
			
			currentGuessSet.addLetter(answers.letter);
			let wordHadLetter = currentWord.processLetter(answers.letter);

			if(wordHadLetter != true)
			{
				wrongGuesses     += 1;
			}
			
		} // End of if(currentGuessSet.hasLetter(answers.letter) === false)

		
	if(currentWord.hasBlanks() === false)
	{
		console.log("\n    The current artist is " + currentWord.toString());
		console.log("\n\n\n   YOU WON!!!!!\n\n\n");
		doContinue();
	}
	else
	{
		doGuess();
	}
		
	} // End of processAnswers()

	console.log("\n\n\n");
	shouldContinue = drawGallows(wrongGuesses);

	if(shouldContinue)
	{
		console.log("\nThis is the musical artist version of hangman.");
		console.log("\nThe hint for this artist is\n");
		console.log("    " + currentWord.getHint());
		console.log("\n    The current artist is " + currentWord.getWord());
		if(firstTime)
		{
			console.log("\nGuesses made so far are " + currentGuessSet.getGuesses());
		}
		console.log("\n\n\n");

		inquirer.prompt(promptSet).
		  then(processAnswers ).
		  catch(handlePromptError);
	}
	else
	{
		console.log("\n\nYou lost.");
		console.log("The artist was " + currentWord.toString() + "\n\n\n");
		doContinue();
	}

} // End of doGuess()
  
/**
 * initializeSession initializes state variables of the hangman game.
 */
function initializeSession()
{

	wordCollection   = new WordCollection();
	currentWord      = wordCollection.getRandomWord();
	currentGuessSet  = new GuessSet();	
    wrongGuesses     = 0;
    firstTime        = true;
    
} // End of initializeSession()

/**
 * playHangman is the entry point for the hangman game
 */
function playHangman()
{
	initializeSession();	
	doGuess();	
}

// "Shall we play a game?"
playHangman();

