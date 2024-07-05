import express from "express";

const app = express();
app.use(express.json());

//routes
// app.use('/api',router)
//setting the port.
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
