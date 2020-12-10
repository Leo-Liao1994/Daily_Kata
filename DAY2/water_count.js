// "1 beer"  -->  "1 glass of water"
// because you drank one standard drink

// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
// because you drank ten standard drinks 


function hydrate(s) {
  let result = []
  for (let w of s) {
    if((+w) > 0){
      result.push(+w)
    }
  }
  let total_drink =result.reduce((a, b) => a + b, 0);
  let output = `${total_drink} glasses of water`

  if(total_drink = 1){
    output = "1 glass of water"
  }

  return output;
}  



hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer")