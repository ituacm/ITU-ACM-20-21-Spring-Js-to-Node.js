// cache wrapper

function cacheForOneParam(fn) {
  const map = new Map();
  return function (x) {
    if (map.has(x)) {
      return map.get(x);
    }

    const result = fn(x);
    map.set(x, result);
    //console.log(map);
    return result;
  };
}
let container = {
  fib: (n) => {
    console.log(container, container.a);
    if (n <= 1) {
      return 1;
    }
    return container.fib(n - 1) + container.fib(n - 2);
  },
  a: 1,
};

/*function fib(n) {
  if (n <= 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}*/

//const myFib = cacheForOneParam(fib);
//container.fib = cacheForOneParam(container.fib);

let start = Date.now();
//let result = fib(40);
let result = container.fib(1);
let end = Date.now();
console.log(result, end - start);

start = Date.now();
//result = fib(40);
//result = container.fib(1);
end = Date.now();
console.log(result, end - start);

//const old = container;
//container = { fib: old.fib, a: 2, b: 1 };
//container.fib(1);
//old.fib(1);
