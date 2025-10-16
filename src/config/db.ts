import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
    const url = process.env.DATABASE_URL as string;
    console.log("error")
    if (!url) {
        console.error('DATABASE_URL is not defined in environment variables');
        process.exit(1); // Exit process with failure
    }
    try {
        await mongoose.connect(url);
        console.log('✅Database connected successfully');
    } catch (error) {
        console.error('❌Database connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
