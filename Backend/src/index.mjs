import express from "express";
import connectDB from "./database/db.mjs";
import router from "./routes/usersRoutes.mjs";

const app = express();
app.use(express.json());

//routes
app.use('/api/users',router)
//setting the port.
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
