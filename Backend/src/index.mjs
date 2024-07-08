import express from "express";
import router from "./routes/allRoutes.mjs";

const app = express();
app.use(express.json());

//routes
app.use('/api',router)

//setting the port.
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
