require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require('./src/modules/routes/user.routes')
const visitRouter = require('./src/modules/routes/visit.routes')

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use('/auth', userRouter);
app.use('/visit', visitRouter)

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
