// stream from web

const http = require("http");

const request = http.request("http://www.google.com", (response) => {
  console.log(response.headers);
  response.addListener("data", (buf) => {
    console.log("Received Data:", buf.toString("utf8"));
  });
});

request.end();
