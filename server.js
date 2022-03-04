const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.static("build"));
app.use(redirectUnmatched);
app.all("*", (req, res) => {
  res.sendFile(path.resolve(__dirname , "/build/index.html"));
});



function redirectUnmatched(req, res) {
  res.redirect("/");
}
const port = 8000;

app.listen(process.env.PORT || port, () => {
  console.log("Server listening on port 8000!");
});
