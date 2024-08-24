import mongoose from 'mongoose';

const connectDB = async () => {

    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }
        await mongoose.connect(uri);
        return console.log('MongoDB connected successfully');
    } catch (error: any) {
        console.error('Error connecting to MongoDB:', error.message);
        throw new Error(error);
    }
};

export default connectDB;
