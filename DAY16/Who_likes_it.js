// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

function likes(names) {
  let result = 'no one likes this'; 
  if(names.length === 1) {
    result = `${names[0]} likes this`
  } else if (names.length === 2) {
    result = `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3) {
    result = `${names[0]}, ${names[1]} and ${names[2]}like this`
  }else if (names.length > 2) {
    result = `${names[0]} and ${names[1]} and ${names.length - 2} others like this`
  }
  return result;
}