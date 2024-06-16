import { connect } from "mongoose";

const db_URI=process.env.DatabaseURI || 'mongodb://localhost:27017/inventory'
const connectToDatabase=async()=>{
    try { 
        await connect(db_URI);
        console.log('Database connected');
    } catch (error) {
        console.log('Error in connecting to database');
    }
}

export default connectToDatabase;