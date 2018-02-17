/***********************************************************************
 * Copyright (c) 2018 Charles W. Roberts
 * All Rights Reserved
 *
 * No portion of this code may be copied or modified without the
 * prior written permission of Charles Roberts.
 *
 ***********************************************************************/

/**
 * @file Contains the Object definition of Letter objects.  
 * @author Charles Roberts
 * @copyright Charles Roberts 2018
 */

/**
 * @classdesc Letter objects are the letters 
 * in an artist's name in the Hangman game.
 */
 class Letter
 {
 	/**
 * The constructor for Letter objects
 * @param {String} letter_in The actual word.
 */
 	constructor(letter_in)
 	{
	 	"use strict";

	 	let letter = letter_in;

	 	let show = false;

		/**
		 * show sets the show property to true for a letter object
		 */
		this.show = function()
		{
			show = true;
		};

	 	/**
	 	 * isEqualTo determines if this letter object
	 	 * is a representation of a specific letter
	 	 * @param  {String}  incomingLetter The specific letter
	 	 * @return {Boolean} True if this object represents 
	 	 * the incoming letter; false otherwise.
	 	 */
	 	this.isEqualTo = function(incomingLetter)
	 	{
	 		let retValue = false;

	 		if(letter.toUpperCase() === incomingLetter.toUpperCase())
	 		{
	 			retValue = true;
	 		}

	 		return retValue;

	 	}; // End of this.isEqualTo()

	 	/**
	 	 * getLetter returns either the letter or 
	 	 * an underscore depending upon the state variable, show.
	 	 * @return {String} The letter, a space, or an underscore.
	 	 */
	 	this.getLetter = function()
	 	{
	 		let retValue = '';
	 		if(show === true)
	 		{
	 			if(letter === ' ')
	 			{
	 				retValue = ' ';
	 			}
	 			else
	 			{
		 			retValue = letter;
		 		}
	 		}
	 		else 
	 		{
	 			if(letter === ' ')
	 			{
	 				retValue = ' ';
	 			}
	 			else
	 			{
		 			retValue = '_';
		 		}
	 		}

	 		return retValue;

	 	}; // End of this.getLetter()

	 	this.isClear = function()
	 	{
		 	let retValue = false;

		 	if(show === true)
		 	{
		 		retValue = true;
		 	}

		 	return retValue;

		}; // End of this.isClear()

	 } // End of the Letter constructor(letter_in)

} // End of class Letter

 module.exports = Letter;