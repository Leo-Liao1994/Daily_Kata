// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter. 

const quarterOf = (month) => {
  let result= 4
  if (month <= 3) {
    result = 1;
  } else if (month <= 6) {
    result = 2;
  } else if (month <= 9) {
    result = 3;
  }
  return result
}