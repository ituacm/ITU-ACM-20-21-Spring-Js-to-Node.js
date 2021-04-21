// this

function printA() {
  console.log("A =", this.a);
}

printA();

const o1 = { a: 1, printA: printA };
o1.printA();

const o2 = { a: 2 };
o2.printA = printA;
o2.printA();

const o3 = { a: 3 };
const o3Print = printA.bind(o3);
o3Print();

// Arrow function
const printB = () => {
  console.log("B =", this.b);
};

const o4 = { b: 4, printB: printB };
o4.printB();

// Functions like settimeout
setTimeout(function () {
  console.log(this);
}, 0);
