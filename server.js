const express = require("express");
const app = express();
const PORT = process.env.PUBLIC_URL || 5000;
const path = require("path");

const clientRouters = ["/", "/signup", "/login", "/cart", "/checkout"];

app.use("/api", require("./router/api"));
app.use("/admin", require("./router/admin"));

app.use(express.static("client/build"));

app.get(clientRouters, (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
