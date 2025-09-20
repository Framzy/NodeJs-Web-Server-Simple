import http from "http";
import fs from "fs";

const port = 3000;

const renderHtml = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("File not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const url = req.url;
    switch (url) {
      case "/":
        renderHtml("./index.html", res);
        break;
      case "/home":
        renderHtml("./index.html", res);
        break;
      case "/about":
        renderHtml("./about.html", res);
        break;
      default:
        res.write("404 Not Found\n");
        res.end();
    }
  })
  .listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
