import express from "express";

const app = express();

import { BACKEND_URL } from "@repo/common/config";
console.log("hi there");
app.get("/", (req, res) => {
  res.json({ message: "hi there, from backend index.ts" });
});

app.listen(3000);
