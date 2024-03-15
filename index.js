const express = require("express");
const cors = require("cors");

const app = express();
const post = 3000;

const cssFilePath = path.join(__dirname, "/static/styles.css");
const jsFilePath = path.join(__dirname, "/static/event.js");

app.use(cors());

app.get("/static/style.css", async (req, res) => {
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

app.get("/static/javascript.js", async (req, res) => {
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

app.get('/', (req, res) => {
  res.send("OK")
})

app.listen(post, (req, res) => {
  console.log(`Server listening on ${post}`);
});
