// stream

process.stdin.addListener("data", (buf) => {
  console.log("Received:", buf, buf.toString("utf8"));
});
