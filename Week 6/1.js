// module.exports

console.log("Hello World");

let moduleVar = 0;

module.exports = {
  a: 1,
  b: () => {
    console.log("ModuleVar: ", moduleVar);
    moduleVar++;
  },
};
