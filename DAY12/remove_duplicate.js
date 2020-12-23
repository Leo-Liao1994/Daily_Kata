const remove = (array) => {
  let output = [] 
  for(let i = 0; i < array.length; i++) {
    if(indexOf(array[i]) === -1) {
      output.push(array[i])
    }
  }
  return output;
} 
