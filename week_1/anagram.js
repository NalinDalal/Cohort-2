function isAnagram(str1, str2) {
  str1 = str1.replace(/\s/g, " ").toLowerCase(); //REMOVE SPACE;LOWERCASE ALL
  str2 = str2.replace(/\s/g, " ").toLowerCase();

  function countCharacters(s) {
    const charCount = {};
    for (const char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
  }

  const charCount1 = countCharacters(str1);
  const charCount2 = countCharacters(str2);

  for (const char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  for (const char in charCount2) {
    if (!(char in charCount1)) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;

const str1 = "spar";
const str2 = "rasp";

const result = isAnagram(str1, str2);

console.log(result);
