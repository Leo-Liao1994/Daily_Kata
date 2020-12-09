// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3] 

function arrayDiff(a, b) {
  const index = a.indexOf(b);
  if (index > -1) {
    a.splice(index, 1);
  }
  return a 
}