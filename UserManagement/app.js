const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app=express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);


app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});