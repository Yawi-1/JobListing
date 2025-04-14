const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection");
const jobRoutes = require("./routes/job.routes");
const cors = require("cors");
dotenv.config();
const app = express();


app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true, 
}));
app.use(express.json());
app.use('/api',jobRoutes);


app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(3000, () => {
  connectDb();
  console.log("Server is running on port 3000");
});
