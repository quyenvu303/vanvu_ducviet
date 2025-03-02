const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("docs")); // Chạy thư mục "docs" chứa index.html

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
