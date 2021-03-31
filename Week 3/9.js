// reduce
const arr = [
  {
    val: 1,
    name: "o1",
  },
  {
    val: 4,
    name: "o2",
  },
  {
    val: 5,
    name: "o3",
  },
  {
    val: 8,
    name: "o4",
  },
];

console.log(arr);

const sum = arr.reduce((acc, el) => {
  return acc + el.val;
}, 0);

console.log(sum);
