import express from "express";
import router from "./routes/allRoutes.mjs";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import errorHandler from "./middlewares/errorHandler.mjs";
import cors from "cors";

// import crypto from 'crypto'

// const secretKey = crypto.randomBytes(64).toString('hex');
// console.log(secretKey);

dotenv.config();

// console.log(`JWT_SECRET_KEY: ${process.env.JWT_SECRET_KEY}`);

const app = express();

// allowing cross-origin requests from your frontend.
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true, // Allow credentials (cookies, headers)
}));

//middleware to pass json bodies
app.use(express.json());

//handling errors using errorHandling middleware
app.use(errorHandler);

//middleware to pass cookies Secret key
app.use(cookieParser(process.env.COOKIE_SECRET_KEY));

//middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api", router);

//setting the port.
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
