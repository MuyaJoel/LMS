import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

//connection url
const url='mongodb://localhost:27017/Cluster0'

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      userNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
