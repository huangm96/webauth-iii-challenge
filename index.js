const express = require("express");
const helmet = require("helmet");
const cors = require("cors");



const server = express();
const authRouter = require("./auth/auth-router.js");





server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "WELCOME!!!" });
});

server.use("/", authRouter);
const port = process.env.PORT || 5656;

server.listen(port, () => {
  console.log(`\nThe server is listening on ${port}`);
});
