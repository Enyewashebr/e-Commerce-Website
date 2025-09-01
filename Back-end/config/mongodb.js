import mongoose from "mongoose";

const connectDB = async () => {

mongoose.connection.on('connected', () =>{
    console.log("DB connected successfully");
})

    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`);
//   try {
//     await mongoose.connect(process.env.MONGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB connected successfully");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     process.exit(1);
//   }          
};

export default connectDB
