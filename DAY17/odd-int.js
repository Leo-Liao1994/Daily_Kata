function findOdd(A) {
  let result 
  const counts = A.reduce((acc, value) => ({
    ...acc,
    [value]: (acc[value] || 0) + 1
 }), {}); 

 for (let o in counts) {
   if(counts[o] % 2 !== 0) {
     result = o;
   }
 }
 
  return parseInt(result);
} 

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))