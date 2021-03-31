// closure

function randomId() {
  const r = Math.random(); // 0-1
  const idNum = Math.floor(r * 100000);
  return `ID_${idNum}`;
}

console.log(randomId(), randomId());

function makeALogger() {
  const id = randomId();
  return (obj) => {
    console.log(id, obj); //id is captured here
  };
}

const loggerA = makeALogger();
const loggerB = makeALogger();

loggerA(1);
loggerA("test");

loggerB({ a: 1 });
loggerB("loggerB");
