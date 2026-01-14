import express from "express";
import dotenv from "dotenv";

dotenv.config();
let port = process.env.PORT || 8000;

let app = express();

app.listen(port, () => {
  console.log("hello from server ");
});
