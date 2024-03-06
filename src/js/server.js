const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("./dist"));
console.log(express.static("./dist").static)
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
