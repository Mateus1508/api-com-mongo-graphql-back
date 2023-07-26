import mongoose from 'mongoose';

export const db = async () => {
    try {
       //await mongoose.connect();
       console.log('Connect to database!')
    }
    catch (error) {
        console.log('Error:' + error);
    }
}