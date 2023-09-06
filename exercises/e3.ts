/**
 * EXERCISE 3
 * =======================================
 * Make sure to solve both parts beneath
 */

/**
 * === Part 1
 * @task
 * Create the getAverage() function that follows:
 * * Takes an array of numbers as the argument
 * * Returns the average value for the given array of numbers.
 * The function return type must be annotated
 * The for loop must be used
 * The function must be exported
 * Example: getAverage([22, 45, 4, 65]) => 34
 */

export function getAverage(arr: number[]) {
  // Your code goes here...
  let sum: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

/**
 * === PART 2
 * @task
 * Create a getStringSum(str) function that follows:
 * * Takes a string as the argument
 * * Returns the sum of any integers that are in the string.
 * The function return type must be annotated
 * The for loop must be used
 * The function must be exported
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */

export function getStringSum(str: string) {
  // Your code goes here...
  let nums: number[] = [];
  let sum: number = 0;
  for (let i: number = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) {
      nums.push(Number(str[i]));
    }
  }
  for (let i: number = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
