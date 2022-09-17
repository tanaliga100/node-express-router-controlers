// EXPRESS INSTANCE
const express = require("express");
const app = express();

// ROUTE - IMPORTS
const peopleRouter = require("./routes/people");
const auth = require("./routes/auth");

// MIDDLEWARE - STATIC FILES
app.use(express.static("./methods-public"));

// MIDDLEWARE - FORM DATA
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ROUTES- ROUTERS
app.use("/login", auth);
app.use("/api/people", peopleRouter);

app.listen(8080, () => {
  console.log(`Server listening on port 8080
...`);
});
