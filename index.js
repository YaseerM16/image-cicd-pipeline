const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    "Hello, This is From Server Image :) -->Befor and AFTER COINTINTOIE the CD Pipelines :))"
  );
});
//comment for sdffs
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
