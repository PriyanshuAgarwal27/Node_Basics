const http = require("http");
const fs = require("fs"); //file handling
const url = require("url");
const myserver = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}:${req.method} ${req.url} New req recieved\n`;
  const my_url = url.parse(req.url, true);
  console.log(my_url);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (my_url.pathname) {
      case "/":
        if (req.method === "GET") {
          res.end("HomePage");
        }
        break;
      case "/about":
        res.end(`My page ${my_url.query.search}`);
        break;
      default:
        res.end("404");
    }
  }); //asynchronous call
});

myserver.listen(8000, () => {
  console.log("Server started!");
}); //8000 port
