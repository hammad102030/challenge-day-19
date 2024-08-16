// Day 19

// ### Question 1: Find the Maximum Difference
// *Problem Statement:*
// Given an array of integers, find the maximum difference between any two elements in the array. The difference should be calculated as difference = arr[j] - arr[i] where j > i.

// *Example:*
// typescript
// Input: [2, 7, 9, 5, 1, 3, 5]
// Output: 7
// Explanation: The maximum difference is between 9 and 2, where 9 - 2 = 7.

// *Hint:*  
// Iterate through the array, keeping track of the minimum value encountered so far. Calculate the difference between the current element and the minimum value and update the maximum difference accordingly.

// ---

function findMaximumDifference(arr: number[]): number {

    let maxValue = arr[0];
    let maxDifference = - Infinity

    for (let i = 1; i < arr.length; i++) {
        let currentDifference = arr[i] - maxValue;

        if(currentDifference > maxDifference){
            maxDifference = currentDifference
        }
        if(arr[i] < maxValue){
            maxValue = arr[i]
        }
    }
    return maxDifference;
};

const maxElement = findMaximumDifference([2, 7, 9, 5, 1, 3, 5]); //Output: 7

console.log(maxElement);



// ### Question 2: String Character Frequency
// *Problem Statement:*
// Write a function that takes a string as input and returns an object where the keys are characters and the values are the frequency of those characters in the string.

// *Example:*
// typescript
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }


// *Hint:*  
// Use an object to store the frequency of each character. Iterate over the string and update the count for each character

function characterValues(str: string): {[key: string]: number} {

    let frequency : {[key: string]: number} = {}

    for(const char of str) {
        if(frequency[char]) {
            frequency[char]++;
        }
        else {
            frequency[char] = 1;
        }
    }
    return frequency;   
}

console.log(characterValues("hello"));//Output: { h: 1, e: 1, l: 2, o: 1 }
console.log(characterValues("hammad"));//Output: { h: 1, a: 2, m: 2, d: 1 }














