/********************************************()();;***************************
 * Copyright (c) 2018 Charles W. Roberts
 * All Rights Reserved
 *
 * No portion of this code may be copied or modified without the
 * prior written permission of Charles Roberts.
 *
 ***********************************************************************/

/**
 * @file Contains the Object definition of Word objects.  
 * @author Charles Roberts
 * @copyright Charles Roberts 2018
 */

// Import the definition of Letter objects
var Letter = require("./Letter");

/**
 * @classdesc Word objects are the artist's name in the Hangman game.
 */

/**
 * Letter is the object definition of letter objects
 * @type {Object}
 */
class Word
{
/**
 * The constructor for Word objects
 * @param {String} word_in The actual word.
 * @param {String} hint_in The hint for the Hangman game.
 */
 	constructor(word_in, hint_in)
 	{
	 	"use strict";
	 	let word             = word_in;
	 	let hint             = hint_in;
	 	let i                = 0;
	 	let letterCollection = [];

		/**
		 * toString returns the word as clear text
		 * @return {String} The clear text version of the word.
		 */
	 	this.toString = function()
	 	{
	 		return word;

	 	}; // End of this.toString()

	 	/**
	 	 * processLetter processes a letter that is a guess in the 
	 	 * hangman game.  If the letter appears in the name of the artist,
	 	 * then that letter object is set to be shown.
	 	 * 
	 	 * @param  {String} incomingLetter The incoming letter to process.
	 	 * @return {Boolean}    true if the letter appears in the artist's
	 	 * name; false otherwise.
	 	 */
	 	this.processLetter = function(incomingLetter)
	 	{
	 		let retValue = false;
	 		let        i = 0;

	 		for(i = 0; i < letterCollection.length; ++i)
	 		{
	 			if(letterCollection[i].isEqualTo(incomingLetter))
	 			{
	 				letterCollection[i].show();
	 				retValue = true;
	 			}
	 		}

	 		return retValue;

	 	}; // End of this.processLetter()

	 	/**
	 	 * getWord gets the word but with underscores for the 
	 	 * letters that have not been designated to be shown.
	 	 * getWord also returns a string with spaces between
	 	 * the letters.
	 	 * @return {String} the word, but with underscores and
	 	 * spaces
	 	 */
	 	this.getWord = function()
	 	{
	 		let retValue = "";
	 		let i = 0;

	 		for(i = 0; i < letterCollection.length; ++i)
	 		{
	 			retValue += letterCollection[i].getLetter();
	 			retValue += " ";

	 		} // End of for(i = 0; i < letterCollection.length; ++i)

	 		return retValue;

	 	}; // End of getWord()

	 	/**
	 	 * getHint returns the hint for the artist
	 	 * @return {String} The hint for the artist
	 	 */
	 	this.getHint = function()
	 	{
	 		return hint;
	 	};

	 	/**
	 	 * hasBlanks returns whether or not the 
	 	 * string returned by getWord() will have 
	 	 * blanks
	 	 * @return {Boolean} true if there are blanks; false otherwise
	 	 */
	 	this.hasBlanks = function()
	 	{
	 		let i = 0;
	 		let retValue = false;

	 		for(i = 0; i < letterCollection.length; ++i)
	 		{

	 			if(letterCollection[i].isClear() === false)
	 			{
	 				retValue = true;
	 				break;
	 			}
	 		}
	 		
	 		return retValue;

	 	}; // End of this.hasBlanks()

	 	// Create the letterCollection to represent the word object
	 	for(i = 0; i < word_in.length; ++i)
	 	{
	 		let tempLetter = new Letter(word_in.charAt(i));
	 		if(word_in.charAt(i) === ' ')
	 		{
	 			tempLetter.show();
	 		}
	 		letterCollection.push(tempLetter);

	 	} // End of for(i = 0; i < word_in.length; ++i)

	 } // End of the contructor(word_in, hint_in)

 } // End of class Word

// Export the object definition of word objects
module.exports = Word;

 