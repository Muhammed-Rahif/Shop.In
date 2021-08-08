const express = require("express");
const app = express();
const PORT = process.env.PUBLIC_URL || 5000;
const path = require("path");
const db = require("./db/db");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const expressLayouts = require("express-ejs-layouts");

// Body parser
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Session config
const ONE_DAY = 24 * 60 * 60 * 1000;
const DAYS_18 = 18 * ONE_DAY;
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/ShopIn",
    }),
    secret: "ShopIn",
    cookie: { maxAge: DAYS_18 },
  })
);

// Admin static files
app.use(express.static(path.join(__dirname, "public")));

// View engine set up
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/layout");

// DB connection
db.connect();

// User routers list
const clientRouters = ["/", "/signup", "/login", "/cart", "/checkout"];

// Routers
const adminRouters = require("./routers/admin");
const userRouters = require("./routers/api");

app.use("/api", userRouters);
app.use("/admin", adminRouters);

app.use(express.static("client/build"));

app.get(clientRouters, (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
