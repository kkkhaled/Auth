const express = require("express");
const dotenv = require("dotenv").config({ path: "./config/config.env" });
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3001;
app.use(express.json());

const connectDB = require("./config/db");

connectDB();

// Enable CORS
app.use(cors());

//define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contact"));
app.use("/api/auth", require("./routes/auth"));
app.listen(port, () => {
  console.log(`server is running on the port ${port}`);
});
