// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
   return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:");
   let wordEntered = input.question("Enter a word to Scroe:");
   return wordEntered;
   //console.log(oldScrabbleScorer(wordEntered))
   //console.log(scrabbleScorer(wordEntered));
   //console.log(simpleScorer(wordEntered));
   //console.log(vowelBonusScorer(wordEntered));
   //return oldScrabbleScorer(wordEntered);
};

function transform(oldPointStructure) {
   let letterArray = []
   for (let pointValue in oldPointStructure){
      letterArray.push(oldPointStructure[pointValue]);
   }
   let newLetterArray = [];
   for (let i=0; i<letterArray.length; i++){
      for (let j = 0; j<letterArray[i].length; j++){
         newLetterArray.push(letterArray[i][j].toLowerCase());
         newLetterArray = newLetterArray.sort(); 
      }
      
   }
let newPointStructureObject = {}

   for (let x=0; x<newLetterArray.length; x++){
      for (let pointvalue in oldPointStructure){
         if (oldPointStructure[pointvalue].includes(newLetterArray[x].toUpperCase())){
            newPointStructureObject[newLetterArray[x]] = Number(pointvalue)
         }
      }
   }
   //console.log(newLetterArray);
   //console.log(newPointStructureObject);
   return newPointStructureObject
}; 


let newPointStructure;
newPointStructure = transform(oldPointStructure);



let simpleScorer;
simpleScorer = function(word1) {
   let simpleScore = 0
   word1 = word1.toUpperCase();
   for (i=0; i<word1.length; i++){
        simpleScore = simpleScore + 1
   }
   //let simpleScore = Number(word1.length);
   return simpleScore;
}

let vowelBonusScorer;
vowelBonusScorer = function(word2) {
   word2 = word2.toUpperCase();
   let vowels = ['A', 'E', 'I', 'O', 'U'];
   let vowelBonusScore = 0;
   for (let i=0; i<word2.length; i++){
      if (vowels.includes(word2[i])){
         vowelBonusScore = vowelBonusScore+3; 
      } 
      else {
         vowelBonusScore = vowelBonusScore+1;
      }
   }
   return vowelBonusScore;
}

let scrabbleScorer;
//scrabbleScorer = oldScrabbleScorer;
scrabbleScorer = function(word3){
   word3 = word3.toLowerCase()
   newPointScrabbleScore = 0
   for(i=0; i<word3.length; i++){
      //for (const pointvalue in newPointStructure){
         //if (pointvalue.includes(word3[i])) {
            newPointScrabbleScore = newPointScrabbleScore + newPointStructure[word3[i]];
         }
      return newPointScrabbleScore;
   }


let simple = {
   name: "Simple Score",
   description: "Each letter is worth 1 point.",
   scorerFunction: simpleScorer
}

let bonusVowels = {
   name: "Bonus Vowels",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   scorerFunction: vowelBonusScorer
}

let scrabble = {
   name: "Scrabble",
   description: "The traditional scoring algorithm.",
   scorerFunction: scrabbleScorer
}


const scoringAlgorithms = [simple, bonusVowels, scrabble];

function scorerPrompt() {
   //console.log("Let's play some scrabble! Enter a word:");
   //let wordEntered = input.question("Enter a word to Scroe:");
   let wordEntered1 = initialPrompt()
   console.log("Which scoring algorithm would you like to use?\n", 
   "0 - Simple: One point per character\n", 
   "1 - Vowel Bonus: Vowels are worth 3 points\n", 
   "2 - Scrabble: Uses scrabble point system\n");
   let scoringMethod = Number(input.question("Enter 0, 1, or 2: "))

   if (scoringMethod === 0) {
   console.log("algorithm name: ", scoringAlgorithms[0].name);
   console.log(`score for '${wordEntered1}' : ${scoringAlgorithms[0].scorerFunction(wordEntered1)}`);
   } else if (scoringMethod === 1) {
   console.log("algorithm name: ", scoringAlgorithms[1].name);
   console.log(`score for '${wordEntered1}' : ${scoringAlgorithms[1].scorerFunction(wordEntered1)}`);
   } else if (scoringMethod === 2) {
   console.log("algorithm name: ", scoringAlgorithms[2].name);
   console.log(`score for '${wordEntered1}' : ${scoringAlgorithms[2].scorerFunction(wordEntered1)}`);
   }

   }


/*function transform(oldPointStructure) {
   let letterArray = []
   for (let pointValue in oldPointStructure){
      letterArray.push(oldPointStructure[pointValue]);
   }
   let newLetterArray = [];
   for (let i=0; i<letterArray.length; i++){
      for (let j = 0; j<letterArray[i].length; j++){
         newLetterArray.push(letterArray[i][j].toLowerCase());
         newLetterArray = newLetterArray.sort(); 
      }
      
   }
let newPointStructureObject = {}

   for (let x=0; x<newLetterArray.length; x++){
      for (let pointvalue in oldPointStructure){
         if (oldPointStructure[pointvalue].includes(newLetterArray[x].toUpperCase())){
            newPointStructureObject[newLetterArray[x]] = pointvalue
         }
      }
   }
   //console.log(newLetterArray);
   //console.log(newPointStructureObject);
   return newPointStructureObject
}; 


let newPointStructure;
newPointStructure = transform(oldPointStructure);*/


function runProgram() {
   //initialPrompt();
   //transform(oldPointStructure);
   //newPointStructure;
   scorerPrompt();
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
