import express, { Router } from "express";
const cors = require("cors");
import serverless from "serverless-http";


const api = express();
const post = process.env.PORT || 3000;

const cssFilePath = path.join(__dirname, "/static/styles.css");
const jsFilePath = path.join(__dirname, "/static/event.js");

const router = Router();
api.use(cors());

router.get("/statics/style.css", async (req, res) => {
  try {
    // Đọc nội dung của tệp tin CSS
    const cssContent = await fs.readFile(cssFilePath, "utf-8");

    // Trả về nội dung của tệp tin CSS như một phản hồi
    res.setHeader("Content-Type", "text/css");
    res.send(cssContent);
  } catch (error) {
    console.error("Error reading CSS file:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/statics/javascript.js", async (req, res) => {
  try {
    // Đọc nội dung của tệp tin CSS
    const jsContent = await fs.readFile(jsFilePath, "utf-8");

    // Trả về nội dung của tệp tin CSS như một phản hồi
    res.setHeader("Content-Type", "application/javascript");
    res.send(jsContent);
  } catch (error) {
    console.error("Error reading CSS file:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get('', (req, res) => {
  res.send("OK")
})

api.use("/api/", router);
export const handler = serverless(api);
