/**
 * EXERCISE 4
 * =======================================
 * Make sure to solve both parts beneath
 */

/**
 * === PART 1
 * @task
 * Create a findMinValueInArray() function that follows:
 * * Takes an array of numbers as the argument
 * * Returns the MIN (the ) number in the array
 * The function return type MUST be annotated
 * The for loop must be used
 * The function must be exported
 * Example: findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
 */

export function findMinValueInArray(arr: number[]) {
  // Your code goes here...
  let min: number = arr[0];
  for (let i: number = 0; i <= arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

/**
 * === PART 2
 * @task
 * Create a findMaxValueInArray() function that follows:
 * * Takes an array of numbers as the argument
 * * Returns the MAX (greatest value) number in the array
 * The function return type MUST be annotated
 * The for loop must be used
 * The function must be exported
 * Example: findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46
 */

export function findMaxValueInArray(arr: number[]) {
  // Your code goes here...
  let max: number = arr[0];
  for (let i: number = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
