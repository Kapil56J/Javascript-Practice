// Java Script program that counts the occurrences of repeated words in a sentence while ignoring a specific banned word.

// String sentence = "This is a test sentence and this test is only a test";
// String bannedWord = "test"; // Banned word to exclude
// Output 1:
// Repeated words (excluding banned word "test"):
// this: 2
// is: 2
// a: 2

// Output 2:
// Repeated words (excluding banned word "this"):
// test: 3
// is: 2
// a: 2

function countRepeatedWords(sentence, bannedWord) {
    const words = sentence
      .toLowerCase()
      .split(/\s+/) 
      .filter(word => word !== bannedWord.toLowerCase()); 
  
    const wordCount = {};
  
    for (const word of words) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  
    const repeatedWords = {};
    for (const word in wordCount) {
      if (wordCount[word] > 1) {
        repeatedWords[word] = wordCount[word];
      }
    }
  
    console.log(`Repeated words (excluding banned word "${bannedWord}"):`);
    for (const word in repeatedWords) {
      console.log(`${word}: ${wordCount[word]}`);
    }
  }
  
  // Test Case 1
  let sentence = "This is a test sentence and this test is only a test";
  let bannedWord = "test";
  countRepeatedWords(sentence, bannedWord);
  
  // Test Case 2
  bannedWord = "this";
  countRepeatedWords(sentence, bannedWord);

  // occurence of each element in an array
const array2 = [1, 2, 2, 3, 4, 5, 6, 6 , 7, 8, 9, 10];
const occurrence = {};
array2.forEach(value => {
  if (occurrence[value]) {
    occurrence[value] += 1;
  }
  else {
    occurrence[value] = 1;
  }
});
// explaination: forEacch takes a callback function and iterates over each element of the array. It checks if the value already exists in the occurrence object. If it does, it increments the count by 1. If it doesn't, it initializes the count to 1.
console.log('occurrence', occurrence);
// Output: { '1': 1, '2': 2, '3': 1, '4': 1, '5': 1, '6': 2, '7': 1, '8': 1, '9': 1, '10': 1 }
  



