const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection");
const jobRoutes = require("./routes/job.routes");
const cors = require("cors");
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ["GET"], 
  credentials: true, 
}));
app.use(express.json());
app.use('/api',jobRoutes);


app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(port, () => {
  connectDb();
  console.log(`Server is running on port ${port}`);
});
