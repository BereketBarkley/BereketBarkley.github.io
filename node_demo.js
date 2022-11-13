let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let evens = numbers.filter(function(val) {
  return val % 2 == 0;
});
console.log(`Even numbers in the list: ${evens}`);

let sum_odds = numbers.reduce(function(acc, val) {
  if (val % 2 != 0) return acc + val;
  return acc;
});
console.log(`Sum of odd numbers in the list: ${sum_odds}`);

let squares = numbers.map(function(val) {
  if (val % 2 != 0) return val * val;
  return val;
});
console.log(`Square of odd numbers in the list: ${squares}`);
