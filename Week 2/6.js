const classes = {
  IntroductionToC: 20,
  DigitalCircuits: 30,
  ComputerOrganization: 32,
  ComputerArchitecture: 10,
};

console.log(classes);

for (const name in classes) {
  console.log(name, classes[name]);
}

const classesArray = [
  { name: "IntroductionToC", studentCount: 20 },
  { name: "DigitalCircuits", studentCount: 30 },
  { name: "ComputerOrganization", studentCount: 32 },
  { name: "ComputerArchitecture", studentCount: 10 },
];

console.log(classesArray, classesArray[0]);

for (const el of classesArray) {
  console.log(el, el.name, el.studentCount);
}
