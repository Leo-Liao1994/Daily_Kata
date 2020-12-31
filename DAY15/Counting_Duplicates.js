// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`) 


function duplicateCount(text){
  let result = 0; 
  let arr = []
  const lowerCase = text.toLowerCase(); 
  for (let l of lowerCase) {
    arr.push(l)
  }

  const counts = arr.reduce((acc, value) => ({
    ...acc,
    [value]: (acc[value] || result) + 1
 }), result);
  

 for (let o in counts) {
  if(counts[o] !== 1) {
    result +=1
  }
} 

 return result
}  

console.log(duplicateCount('abBcdea'))

