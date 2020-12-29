// solution('abc')  should return ['ab', 'c_']
// solution('abcdef')  should return ['ab', 'cd', 'ef'] 


function solution(str){
  let arr = []
   for(let i = 0; i < str.length; i += 2) {
    arr.push(`${str[i]}${str[i+1]}`)
   }
   let check = arr.lastIndexOf(`${str[str.length - 1]}undefined`)

  if( check !== -1){
    arr[arr.length - 1] = `${str[str.length - 1]}_`
  }
  return arr
}


