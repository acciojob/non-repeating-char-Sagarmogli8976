function firstNonRepeatedChar(str) {
 // Write your code here
	 if (!str) return null;

  let count = {};

  // Count frequency of each character
  for (let ch of str) {
    count[ch] = (count[ch] || 0) + 1;
  }

  // Find first character with count = 1
  for (let ch of str) {
    if (count[ch] === 1) {
      return ch;
    }
  }

  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
