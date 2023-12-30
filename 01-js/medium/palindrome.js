/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let i = 0
  let j = str.length-1
  
  while(i< (str.length)/2) {

    if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 123){
      if(str.charCodeAt(j) >= 97 && str.charCodeAt(j) <= 123){
        if(str[i] !== str[j])
          return false;
        i++; 
        j--;
      }else{
        j--;
      }
    }else{
      i++;
    }
  }
  return true;
}

module.exports = isPalindrome;
