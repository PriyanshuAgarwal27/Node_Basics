const http = require("http");
const fs = require("fs"); //file handling

const myserver = http.createServer((req, res) => {
  const log = `${Date.now()}:${req.url} New req recieved\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("About");
        break;
      default:
        res.end("404");
    }
  }); //asynchronous call
});

myserver.listen(8000, () => {
  console.log("Server started!");
}); //8000 port
