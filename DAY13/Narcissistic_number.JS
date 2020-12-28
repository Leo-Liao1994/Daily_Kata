// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153   true
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 false


function narcissistic(value) {
  let stringValue =  value.toString(); 
  let arr = []
  let arr2 = []
  let result = false 
  for( let i of stringValue) {
    
    arr.push(parseInt(i))
  }
  for (let i of arr) {
    arr2.push((Math.pow(i , stringValue.length)))
  }
  let sum = arr2.reduce((a,b) => (a + b), 0)

  if (sum === value) {
    result = true
  }
  return result
} 


console.log(narcissistic(153))