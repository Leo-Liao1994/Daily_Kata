// Your task is to write a function called valid_spacing() or validSpacing() 
// which checks if a string has valid spacing. The function should return either True or False.


function validSpacing(s) {
  let result = true;
  if (s !== s.replace(/\s+/g, " ")) {
    result = false
  } if(s[0] === " " || s[s.length - 1] === " ") {
    result =false
  }
  return result;
} 




