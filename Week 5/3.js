// prototype

const base1 = {
  a: 3,
  hello: function () {
    console.log("Hello", this.a, this.b);
    this.a = this.b;
    //console.log(this.__proto__);
    //this.__proto__.a = this.b;
  },
};

const base2 = {
  a: 2,
  hello: function () {
    console.log("Hello", this.a, this.b);
  },
};

const o1 = { b: 1 };
Object.setPrototypeOf(o1, base1);

const o2 = { b: 2 };
//Object.setPrototypeOf(o2, base2);

o1.hello();
//o2.hello();
Object.setPrototypeOf(o2, base1);
o2.hello();

console.log(o1, o2);
