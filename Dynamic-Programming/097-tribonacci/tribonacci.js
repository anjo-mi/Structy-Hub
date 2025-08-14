const tri = (n) => {
  const storage = {};
  const t = (n) => {
    if (n <= 1) return 0;
    if (n === 2) return 1;
    if (n in storage) return storage[n];
    storage[n] = t(n-1) + t(n-2) + t(n-3);
    return storage[n];
  }
  return t(n);
}
const tribonacci = tri;

/*
create a separate function to eventually set trib to
in that function create an object to store results
return function(param)
if param in object return object[param]
otherwise obj[param] = function(n-1) + f(n-2) + f(n-3)
return obj[param]
outer function returns the call
trib gets set equal to outer function
p
Number (positive)
r
Number (representing the three previous nums' calc's sum)
e
negative numbers, large numbers causing stack overflow
p
create a separate function to eventually set trib to
in that function create an object to store results
return function(param)
if param in object return object[param]
otherwise obj[param] = function(n-1) + f(n-2) + f(n-3)
return obj[param]
outer function returns the call
trib gets set equal to outer function
*/

console.log(tribonacci(37), 1132436852);
console.log(tribonacci(7), 13);
console.log(tribonacci(1), 0);
module.exports = {
  tribonacci,
};
