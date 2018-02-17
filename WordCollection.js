/***********************************************************************
 * Copyright (c) 2018 Charles W. Roberts
 * All Rights Reserved
 *
 * No portion of this code may be copied or modified without the
 * prior written permission of Charles Roberts.
 *
 ***********************************************************************/
/**
 * @file Contains the Object definition of WordCollection objects.  
 * The WordCollection object holds a collection of artist's names
 * and hints about the artists.
 * @author Charles Roberts
 * @copyright Charles Roberts 2018
 */

// Import the definition of Word objects
var Word = require("./Word");

/**
 * @classdesc WordCollection objects  holds a collection of 
 * artist's names and hints about the artists.
 */
class WordCollection
{
   constructor()
{
 	"use strict";

 	let collection = [];

   let needsInit = true;

   /**
    * addWord adds a word (artist) to the WordCollection
    * @param {Object} wordObject The word (artist) to be added.
    */
 	this.addWord = function(wordObject)
 	{
 		collection.push(wordObject);
 	};

   /**
     * Gets a random artist from the collection.
     * @returns {Object} A random artist.
     */
   this.getRandomWord = function()
   {
      const rndm = Math.floor(Math.random() * 19);
      return collection[rndm];
   };

   /**
    * initialize initializes a WordCollection object
    */
 	this.initialize = function()
 	{
      if(needsInit === true)
      {
         needsInit = false;

 		   let word_01 = new Word("Childish Gambino",
               "Rap pop culture mogul who's moniker is inspired by a Wu-Tang Clan name generator");
         this.addWord(word_01);

         this.addWord(word_01);

         let word_02 = new Word("Daft Punk",
               "Helmet clad french retro-futurist electronica group");
            this.addWord(word_02);

         let word_03 = new Word("Florence and the Machine",
            "English indie rock band");
         this.addWord(word_03);

         let word_04 = new Word("Melanie Martinez",
            "Alt pop \"The Voice\" alumni");
         this.addWord(word_04);

         let word_05 = new Word("Beenie Man",
            "The \"king\" of reggae dance hall");
         this.addWord(word_05);

         let word_06 = new Word("Wiley",
            "Bow E3 English eskibeat hip hop word");
         this.addWord(word_06);

         let word_07 = new Word("Katy B",
            "Mercury prize nominated English singer/songwriter");
         this.addWord(word_07);

         let word_08 = new Word("Lindsey Sterling",
            "American electronic violinist");
         this.addWord(word_08);

         let word_09 = new Word("The Lonley Island",
            "American comedy hip hop trio");
         this.addWord(word_09);

         let word_10 = new Word("J Dilla",
            "Detroit based underground hip hop icon");
         this.addWord(word_10);

         let word_11 = new Word("4Hero",
            "London based hardcore breakbeat trip hop group");
         this.addWord(word_11);

         let word_12 = new Word("Portishead",
            "Trip hop pioneering Bristol based band");
         this.addWord(word_12);

         let word_13 = new Word("Soil and Pimp",
            "Japanese club jazz sextet");
         this.addWord(word_13);

         let word_14 = new Word("Beck",
            "American Lo-fi anti folk art pop pioneer");
         this.addWord(word_14);

         let word_15 = new Word("Cake",
            "California based alternative rock band");
         this.addWord(word_15);

         let word_16 = new Word("Big SMO",
            "Billboard charting country rap word");
         this.addWord(word_16);

         let word_17 = new Word("Colt Ford",
            "Southern country rap singer/songwriter");
         this.addWord(word_17);

         let word_18 = new Word("Chance the Rapper",
            "Emmy award winning Chicago based \"Acid Rap\" word");
         this.addWord(word_18);

         let word_19 = new Word("Halsey",
            "American electro/synth pop word");
         this.addWord(word_19);

      } // End of if(needsInit === true)

 	}; // End of this.initialize()

   this.initialize();

 } // End of the WordCollection constructor

} // End of class WordCollection

// Export the definition of WordCollection objects 
module.exports = WordCollection;