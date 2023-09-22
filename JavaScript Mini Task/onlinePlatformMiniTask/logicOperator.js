/**
 * Create an if statement to evaluate the score with the following conditions:
 *  1. If the score is 90 or higher:
 *      - Set the variable result to 'Congratulations! You've got an A.'
 *  2. If the score is in the range of 80 to 89:
 *      - Set the variable result to 'You've got a B.'
 *  3. If the score is in the range of 70 to 79:
 *      - Set the variable result to 'You've got a C.'
 *  4. If the score is in the range of 60 to 69:
 *      - Set the variable result to 'You've got a D.'
 *  5. If the score is below 60:
 *      - Set the variable result to 'You've got an E.'
 *
 *  Note: - Please do not delete the existing code.
 *        - You do not need to manually create the result and score variables.
 *          Use the provided variables.
 *
 */

function scoreChecker(score) {
 

  // TODO
	  let result;

  if (score >= 90) {
    result = "Congratulations! You've got an A.";
  } else if (score >= 80 && score <= 89) {
    result = "You've got a B.";
  } else if (score >= 70 && score <= 79) {
    result = "You've got a C.";
  } else if (score >= 60 && score <= 69) {
    result = "You've got a D.";
  } else {
    result = "You've got an E.";
  }

  return result;
}


  // Do not delete the code below

/**
 * Do not delete the code below
 */
module.exports = scoreChecker;
