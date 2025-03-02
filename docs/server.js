const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve các file tĩnh trong thư mục DOCS
app.use(express.static(path.join(__dirname, "DOCS")));

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
