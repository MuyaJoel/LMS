import express from "express";
import router from "./routes/allRoutes.mjs";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// import crypto from 'crypto'

// const secretKey = crypto.randomBytes(64).toString('hex');
// console.log(secretKey); 

dotenv.config();

// console.log(`JWT_SECRET_KEY: ${process.env.JWT_SECRET_KEY}`);

const app = express();
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET_KEY))

//routes
app.use("/api", router);

//setting the port.
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
