// Importing the list of questions from an external file
import { questions } from "./questions.js"; // Import questions from a separate file

// Get DOM (Document Object Model) elements for various parts of the quiz interface
const questionElement = document.getElementById("question"); // Element to display the current question
const answerButtons = document.getElementById("answer-buttons"); // Container for answer buttons
const nextButton = document.getElementById("next-btn"); // Button to navigate to the next question
const backButton = document.getElementById("back-btn"); // Button to go back to the previous question
const timerElement = document.getElementById("timer"); // Timer display element
const progressBarElement = document.getElementById("progress"); // Progress bar for quiz progress
const questionCounterElement = document.getElementById("question-counter"); // Display for current question number
const correctCountElement = document.getElementById("correct-count"); // Display for number of correct answers
const incorrectCountElement = document.getElementById("incorrect-count"); // Display for number of incorrect answers
const correctSound = new Audio("audio/correct_answer.mp3"); // Audio for correct answer
const incorrectSound = new Audio("audio/incorrect_answer.mp3"); // Audio for incorrect answer

// Initialize variables to track quiz state
let currentQuestionIndex = 0; // Track the current question index
let score = 0; // Track the number of correct answers
let incorrectScore = 0; // Track the number of incorrect answers
let timeLeft = 3900; // 65 minutes in seconds for the quiz timer
let timerInterval; // Variable to hold the timer interval
let quizEnded = false; // Flag to check if the quiz has ended

// Array to store a subset of 40 random questions selected from the pool
let selectedQuestions = [];

// Start the quiz by resetting the state and showing the first question
function startQuiz() {
  quizEnded = false; // Reset the quizEnded flag
  currentQuestionIndex = 0; // Reset the question index to start
  score = 0; // Reset the score
  incorrectScore = 0; // Reset the incorrect score
  timeLeft = 3900; // Reset the timer to 65 minutes
  nextButton.innerHTML = "Next"; // Set the next button text
  backButton.innerHTML = "Back"; // Set the back button text

  // Randomly select 40 questions from the pool
  selectedQuestions = getRandomQuestions(questions, 40);

  updateProgressBar(); // Initialize the progress bar
  showQuestion(); // Show the first question
  updateQuestionCounter(); // Update the question counter display
  updateScoreCount(); // Update the score display
  startTimer(); // Start the quiz timer
}

// Function to shuffle an array (used to randomize questions)
function shuffle(array) {
  let currentIndex = array.length; // Store the length of the array
  while (currentIndex != 0) {
    // While there are elements to shuffle
    let randomIndex = Math.floor(Math.random() * currentIndex); // Pick a random index
    currentIndex--;
    // Swap the current element with the random element
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

// Get a subset of `num` random questions from the provided array
function getRandomQuestions(array, num) {
  let clonedArray = [...array]; // Clone the array to avoid modifying the original
  shuffle(clonedArray); // Shuffle the cloned array
  return clonedArray.slice(0, num); // Return the first `num` elements from the shuffled array
}

// Function to show the current question and answers
function showQuestion() {
  resetState(); // Reset the state to prepare for the new question
  let currentQuestion = selectedQuestions[currentQuestionIndex]; // Get the current question
  questionElement.innerHTML = currentQuestion.question; // Display the question text

  // If there is an image for the question, create and display it
  if (currentQuestion.image) {
    const imgElement = document.createElement("img"); // Create an image element
    imgElement.src = currentQuestion.image; // Set the image source
    imgElement.alt = "Question Image"; // Set the image alt text
    imgElement.classList.add("question-image"); // Add a class for styling the image
    questionElement.appendChild(imgElement); // Add the image to the question element
  }

  // Create and display buttons for each answer
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button"); // Create a button element
    button.classList.add("btn"); // Add a class for styling
    button.appendChild(document.createTextNode(` ${answer.text}`)); // Add the answer text to the button
    answerButtons.appendChild(button); // Add the button to the answer buttons container

    if (answer.correct) {
      button.dataset.correct = answer.correct; // Mark the button as correct if the answer is correct
    }
    // Add an event listener to handle answer selection
    button.addEventListener("click", selectAnswer);
  });
  updateQuestionCounter(); // Update the question counter display
}

// Reset the UI state for the next question
function resetState() {
  nextButton.style.display = "none"; // Hide the next button initially
  backButton.style.display = "block"; // Show the back button
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild); // Remove all previous answer buttons
  }
  const explanationElement = document.getElementById("explanation"); // Get the explanation element
  explanationElement.innerHTML = ""; // Clear the explanation
  explanationElement.style.display = "none"; // Hide the explanation element
  const linkElement = document.getElementById("link"); // Get the link element
  linkElement.innerHTML = ""; // Clear any previous link
}

// Handle answer selection logic
function selectAnswer(e) {
  const selectedBtn =
    e.target.tagName === "SPAN" ? e.target.parentNode : e.target; // Get the selected button
  const isCorrect = selectedBtn.dataset.correct === "true"; // Check if the selected answer is correct

  // Function to play a sound when an answer is selected
  function playSound(sound) {
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  }

  // If the selected answer is correct, update the score and play the correct sound
  if (isCorrect && !selectedBtn.classList.contains("correct")) {
    selectedBtn.classList.add("correct");
    score++; // Increment the score
    playSound(correctSound); // Play the correct answer sound
  } else if (!isCorrect && !selectedBtn.classList.contains("incorrect")) {
    selectedBtn.classList.add("incorrect");
    incorrectScore++; // Increment the incorrect answer count
    playSound(incorrectSound); // Play the incorrect answer sound
  }

  // Check if all correct answers have been selected
  const allCorrectAnswers = Array.from(answerButtons.children).filter(
    (button) => button.dataset.correct === "true"
  );
  const selectedCorrectAnswers = Array.from(answerButtons.children).filter(
    (button) =>
      button.classList.contains("correct") && button.dataset.correct === "true"
  );

  // If all correct answers are selected, display the explanation and show the next button
  if (allCorrectAnswers.length === selectedCorrectAnswers.length) {
    const explanationElement = document.getElementById("explanation");
    const linkElement = document.getElementById("link"); // Get the explanation and link elements
    let currentQuestion = selectedQuestions[currentQuestionIndex]; // Get the current question
    explanationElement.innerHTML = currentQuestion.explanation; // Set the explanation text
    explanationElement.style.display = "block"; // Show the explanation
    explanationElement.classList.remove("show");
    explanationElement.classList.add("show");

    // If the current question has a link, create and display it
    if (currentQuestion.link) {
      linkElement.innerHTML = ""; // Clear any existing link
      const link = document.createElement("a"); // Create a new link element
      link.href = currentQuestion.link; // Set the link URL
      link.target = "_blank"; // Open the link in a new tab
      link.rel = "noopener noreferrer"; // Security best practice
      link.textContent = "Learn more"; // Set the link text
      link.style.color = "white"; // Style the link
      linkElement.appendChild(link); // Append the link to the link element
    } else {
      linkElement.innerHTML = ""; // Clear the link if no URL is provided
    }

    nextButton.style.display = "block"; // Show the next button
    backButton.style.display = "block"; // Keep the back button visible
  }
  updateScoreCount(); // Update the score display
}

// Display the final score and end the quiz
function showScore() {
  resetState(); // Reset the UI state
  questionElement.innerHTML = `Well done! That was ${selectedQuestions.length} questions!`; // Display a message
  nextButton.innerHTML = "Try Again"; // Set the next button text to "Try Again"
  nextButton.style.display = "block"; // Show the next button
  clearInterval(timerInterval); // Stop the timer
  quizEnded = true; // Set the quizEnded flag
}

// Handle the next button click event
function handleNextButton() {
  if (quizEnded) return; // If the quiz has ended, do nothing

  currentQuestionIndex++; // Increment the question index
  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion(); // Show the next question if available
  } else {
    showScore(); // Show the final score if no more questions
  }
  updateProgressBar(); // Update the progress bar
}

// Event listener for the next button to show the next question or restart the quiz
nextButton.addEventListener("click", () => {
  if (quizEnded) {
    startQuiz(); // Restart the quiz if it has ended
  } else if (currentQuestionIndex < selectedQuestions.length) {
    handleNextButton(); // Show the next question
  } else {
    startQuiz(); // Restart the quiz if no more questions
  }
});

// Event listener for the back button to go back to the previous question
backButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--; // Decrement the question index
    showQuestion(); // Show the previous question
    updateProgressBar(); // Update the progress bar
  }
});

// Start the timer and update it every second
function startTimer() {
  timerInterval = setInterval(updateTimer, 1000); // Update the timer every second
}

// Function to update the timer display
function updateTimer() {
  timeLeft--; // Decrease the time left by one second
  const minutes = Math.floor(timeLeft / 60); // Calculate minutes
  const seconds = timeLeft % 60; // Calculate seconds
  const timeDisplay = document.getElementById("time-display"); // Get the time display element
  if (timeDisplay) {
    timeDisplay.textContent = `${minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`; // Display the time in minutes:seconds format
  }

  if (timeLeft <= 0) {
    // If the time runs out
    clearInterval(timerInterval); // Stop the timer
    showScore(); // End the quiz and show the score
  }
}

// Toggle the visibility of the menu (for mobile devices)
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Event listener to toggle the menu when clicked
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Event listener to close the menu when a link is clicked (mobile use case)
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("show");
  }
});

// Update the progress bar to reflect the current question progress
function updateProgressBar() {
  const progressPercentage =
    (currentQuestionIndex / selectedQuestions.length) * 100; // Calculate the progress percentage
  progressBarElement.style.width = progressPercentage + "%"; // Set the width of the progress bar
}

// Update the question counter display
function updateQuestionCounter() {
  questionCounterElement.innerHTML = `Question ${currentQuestionIndex + 1}/40`; // Display current question out of 40
}

// Update the score display
function updateScoreCount() {
  correctCountElement.innerHTML = score; // Display the number of correct answers
  incorrectCountElement.innerHTML = incorrectScore; // Display the number of incorrect answers
}

// Reset the quiz state and prepare for a new session
function resetQuizState() {
  quizEnded = false; // Reset the quizEnded flag
  nextButton.style.display = "none"; // Hide the next button
  backButton.style.display = "block"; // Show the back button
}

// Start the quiz when the page loads
resetQuizState();
startQuiz();
