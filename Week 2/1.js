const user = {
  id: 1,
  name: "Onurcan",
  email: "example@gmail.com",
  address: "Istanbul",
  createdAt: Date.now(),
};

console.log(user);
console.log(user.id, user.name, user.createdAt);
console.log(user["id"], user["name"], user["createdAt"]);

user.additionalProperty = true;
user.name = "Not Onurcan";

console.log(user);
