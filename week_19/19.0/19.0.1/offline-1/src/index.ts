import express from "express";

const app = express();

let requestCount = 0;

function middleware(req: any, res: any, next: any) {
  requestCount++;
  next();
}

app.use(middleware);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/requestCount", (req, res) => {
  res.json({
    requestCount,
  });
});

app.listen(3000);
