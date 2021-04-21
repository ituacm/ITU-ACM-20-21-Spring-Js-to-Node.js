// extends

class MyEmitter extends EventTarget {
  addEventListener(...args) {
    console.log("Add event listener Called", args);
    super.addEventListener(args[0], this._SecretListener.bind(this));
    super.addEventListener(...args);
    this.dispatchEvent(
      new CustomEvent("event-added", { detail: { name: args[0] } })
    );
  }

  _SecretListener(ev) {
    console.log("Secret listener is listening", ev);
  }

  TriggerTest(data = {}) {
    this.dispatchEvent(new CustomEvent("test", { detail: data }));
  }
}

const emitter = new MyEmitter();

emitter.addEventListener("event-added", (data) => {
  console.log("Hello", data.detail);
});

emitter.addEventListener("test", ({ detail }) => {
  console.log("test", detail);
});

emitter.TriggerTest({ a: 1, b: 2 });
