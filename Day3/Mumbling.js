// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


function accum(s) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  
  let arrayOfLetter= []
  let repeat
  for (let l = 0; l < s.length; l++) {
     repeat = s[l].repeat(l + 1)
   
    arrayOfLetter.push(capitalizeFirstLetter(repeat))
  }
  return arrayOfLetter.join("-")
} 


console.log(accum('ZpglnRxqenU'))