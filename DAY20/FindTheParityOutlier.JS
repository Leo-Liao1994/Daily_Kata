function findOutlier(integers){
  let ary1 =[];
  let ary2 = [];
  let result
  for (let i of integers){
    if (i % 2 !== 0){
      ary1.push(i)
    } else ary2.push(i)
  }
  ary1.length > ary2.length ? result = ary2[0] : result = ary1[0]
  return result
}