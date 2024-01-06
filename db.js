import mongoose from "mongoose";

const URL =
  "mongodb+srv://harshkurulkar7:harsh@cluster0.ydruukh.mongodb.net/oyo";

const connectDB = async () => {
  await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("DB connected...");
};

export default connectDB;
