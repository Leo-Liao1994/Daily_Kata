function getCount(str) {
  let vowelsCount = 0;
  const ary = str.split("")  
  for(let i of ary) {
    if(['a', 'e', 'i', 'o', 'u'].indexOf(i) !== -1){
      vowelsCount += 1 
    }
  }
  return vowelsCount;
} 

