// cache wrapper

function cacheForOneParam(fn) {
  const map = new Map();
  return function (x) {
    if (map.has(x)) {
      return map.get(x);
    }

    const result = fn(x);
    map.set(x, result);
    return result;
  };
}

function fib(n) {
  if (n <= 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

const myFib = cacheForOneParam(fib);

let start = Date.now();
//let result = fib(40);
let result = myFib(40);
let end = Date.now();
console.log(result, (end - start) / 1000);

start = Date.now();
//result = fib(40);
result = myFib(40);
end = Date.now();
console.log(result, (end - start) / 1000);
