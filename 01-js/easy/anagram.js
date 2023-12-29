/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const aa = [];

  if(str1.length !==  str2.length)
  return false
  
  
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  
  let c = 0;
  while(c < 256){
    aa.push(0);
    c++;
  }

  
  for(let i = 0; i < str1.length; i+=1 ){
    aa[str1.charCodeAt(i)] = 1;
  }

  for(let i = 0; i < str2.length; i+=1 ){
    aa[str2.charCodeAt(i)] = 0;
  }

  c = 0
  while(c < 256){
    if(aa[c] == 1)
      return false
    c++;
  }
  return true;
}

module.exports = isAnagram;
