/***********************************************************************
 * Copyright (c) 2018 Charles W. Roberts
 * All Rights Reserved
 *
 * No portion of this code may be copied or modified without the
 * prior written permission of Charles Roberts.
 *
 ***********************************************************************/

/**
 * @file Contains the Object definition of GuessSet objects.  
 * @author Charles Roberts
 * @copyright Charles Roberts 2018
 */

// Import the definition of Word objects
var Word = require("./Word");

/**
 * @classdesc GuessSet objects hold a collection of 
 * the letters the player has guessed in the hangman game.
 */
 class GuessSet
 {
 	/**
 * The constructor for GuessSet objects
 */
 	constructor()
 	{
	 	let guesses = [];

	 	/**
	 	 * addLetter adds a letter to the set of letters
	 	 * that have been guessed.
	 	 * @param {String} letterGuessed The letter to be added.
	 	 */
	 	this.addLetter = function(letterGuessed)
	 	{
	 		guesses.push(letterGuessed);
	 	};

	 	/**
	 	 * getGuesses returns a string showing the current
	 	 * set of guesses made in the hangman game
	 	 * @return {String} All the guesses so far
	 	 */
	 	this.getGuesses = function()
	 	{
	 		let retValue = "";
	 		let i = 0;

	 		for (i = 0; i < guesses.length; ++i)
	 		{
	 			if(i === 0)
	 			{
	 				retValue += guesses[0];
	 			}
	 			else
	 			{
	 				retValue += ", " + guesses[i];
	 			}
	 		}

	 		return retValue;

	 	}; // End of getGuesses


	 	/**
	 	 * hasLetter reports whether or not a specific
	 	 * letter has been guessed and is in the guesses set.
	 	 * @param  {String}  letter The specific letter
	 	 * @return {Boolean} True if the specific letter is
	 	 * in the GuessesSet; false otherwise
	 	 */
	 	this.hasLetter = function(letter)
	 	{
	 		let retValue = false;
	 		let i = 0;
	 		
	 		for(i=0; i< guesses.length; ++ i)
	 		{
	 			if(guesses[i] === letter)
	 			{
	 				retValue = true;
	 				break;
	 			}
	 		}

	 		return retValue;

	 	};

	 } // End of GuessSet constructor()

} // End of class GuessSet

 module.exports = GuessSet;