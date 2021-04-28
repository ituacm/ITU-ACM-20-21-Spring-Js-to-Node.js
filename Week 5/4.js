// prototype chain, instance of

function isSerializable(obj) {
  if (typeof obj !== "object") {
    if (
      typeof obj === "boolean" ||
      typeof obj === "number" ||
      typeof obj === "string"
    ) {
      return true;
    } else {
      return false;
    }
  }
  for (const key of Object.getOwnPropertyNames(obj)) {
    const t = typeof obj[key];
    if (t === "bigint" || t === "function" || t === "symbol") {
      return false;
    } else if (t === "object" && Array.isArray(obj[key])) {
      for (const el of obj[key]) {
        if (!isSerializable(el)) {
          return false;
        }
      }
    } else if (t === "object") {
      if (!isSerializable(obj[key])) {
        return false;
      }
    }
  }
  return true;
}

const myBase = {
  get isSerializable() {
    return isSerializable(this);
  },
};

const mySerializableBase = {
  __proto__: myBase,
  serialize() {
    if (!this.isSerializable) {
      throw "Cant Serialize";
    }
    return JSON.stringify(this);
  },
  deserialize(str) {
    const obj = JSON.parse(str);
    Object.assign(this, obj);

    // for (const key in obj) {
    //   this[key] = obj[key];
    // }
  },
};

const o1 = {
  a: {
    b: 1,
  },
  __proto__: mySerializableBase,
};

console.log(o1.serialize());
