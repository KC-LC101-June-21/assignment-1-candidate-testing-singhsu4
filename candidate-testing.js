 const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American female in Space?";
let correctAnswer = ("Sally Ride");
let candidateAnswer = "";
let questions = [
  "1.Who was the first American woman in space? ", //index 0
  "2.True or False: 5 kilometer == 5000 meters? ", //index 1
  "3. (5 + 3)/2 * 10 = ? ", //index 2
  "4. Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", //index 3
  "5. What is the minimum crew size for the ISS? "]; //index 4
//The simplest way is to use array literal notation []. Anything enclosed in the square brackets will be items in the array. Each item should be followed by a comma ,. If there are no items inside the brackets, then the array is considered empty.
let correctAnswers = [
  "Sally Ride",
  "True",
  "40",
  "Trajectory",
  "3"];
let candidateAnswers = [];
//define using let, variable input that you want to use, followed by a semicolon. Only use Let once to initialize the reference. Don't need to use let again after it's been initialized once.


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //question= input.question("1. Who was the first American woman in Space? ");
  for (i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
  console.log();
}

//For the "for loop", you want to format the questions such that they post the question, then the candidates response, then the correct answer. This will then be followed by a space. Then it will repeat againt for the next question in the questionaire. 

function gradeQuiz(candidateAnswers) {
  //percentage grade 
  
  let numCorrect = 0;
  //console.log (typeof numCorrect);
  let totalNumAnswers = question.length;
  let totalQuestionCount = 5;

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log("Candidate Name: " + candidateName);

  for (i = 0; i < questions.length; i++) {
    let userAnswer = candidateAnswers[i];
    let correctAnswer = correctAnswers[i];

    console.log(questions[i]);
    console.log("Your Answer: " + candidateAnswers[i]);
    console.log("Correct Answer: " + correctAnswers[i]);
    console.log();

    if(userAnswer == correctAnswer){
      numCorrect = numCorrect + 1;
    }
  }

  let results = "";

  let grade = numCorrect/totalQuestionCount * 100 ;

  console.log(`>>> Overall Grade: ${grade}% (${numCorrect} of ${questions.length} responses correct) <<<`);

  if (grade >= 80){
      console.log(">>> Status: PASSED <<<")
  }else{
      console.log(">>> Status: Failed <<<")
  }
  
  //let userAnswer = candidateAnswers[i];
  //let correctAnswer = correctAnswers[i];

  //if(userAnswer == correctAnswer){
  //numCorrect = numCorrect + 1;
}
  //console.log("Correct Answer:  " + correctAnswer + "");
  //console.log("Candidate Answer: " + candidateAnswer + "");


   //loop over each question, comparing user input vs. the correct answer times the number of questions in the array



  //return grade;

// for if else statement, in this case the if is executing to see if there is a correct answer, if not, it does not increment the value of correct responses so no else statement is needed. 
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Welcome to the Fury Road, " + candidateName + "! Please Complete the following questions!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};