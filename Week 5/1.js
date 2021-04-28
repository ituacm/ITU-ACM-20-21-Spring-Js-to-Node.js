async function myFetch(url, data = {}) {
  return fetch(`http://localhost:3000${url}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      ["Content-Type"]: "application/json",
    },
  }).then((res) => res.blob());
}

async function fetchImage(name, ms = 5000) {
  return myFetch("/hello", { ms, name });
}

async function main() {
  const img = new MyImg("#img1");
  document.querySelector("#btn").addEventListener("click", () => {
    img.src = "1.jpg";
  });
  document.querySelector("#btn-source").addEventListener("click", () => {
    console.log(img.src);
  });
  img.src = "2.jpg";
}

class MyImg {
  constructor(selector) {
    this.img = document.querySelector(selector);
    console.log(this.img);
  }

  set src(name) {
    this.url = name;
    this.img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    fetchImage(name).then((blob) => {
      const realImageUrl = URL.createObjectURL(blob);
      this.img.src = realImageUrl;
      console.log(realImageUrl);
    });
    console.log(1);
  }

  get src() {
    return this.url || "";
  }
}

main();
