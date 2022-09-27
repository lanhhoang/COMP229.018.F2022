// const hello = require("./hello");
// hello.sayHello();

// Node
// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "Content-Type": "text/plain",
//     });
//     res.end("Hello World");
//   })
//   .listen(3000);

// console.log("Server running a http://localhost:3000/");

// Connect
const connect = require("connect");
const app = connect();

function logger(req, res, next) {
  console.log(req.method, req.url);
  console.log(next);
  // next();
}

function helloWord(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
}

function goodbyeWord(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Goodbye World");
}

app.use(logger);
app.use("/hello", helloWord);
app.use("/goodbye", goodbyeWord);
app.listen(3000);

console.log("Server running a http://localhost:3000/");
