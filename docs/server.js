const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Sử dụng thư mục hiện tại (docs) làm thư mục tĩnh
app.use(express.static(__dirname));

// Route mặc định để tránh lỗi "Cannot GET /"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
