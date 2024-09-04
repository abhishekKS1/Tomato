import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://Mongothor:Mongothor15000@cluster0.gcwwvrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"))
}


// export const connectDB = async ()=>{
//     await mongoose.connect('mongodb+srv://Mongothor:Mongothor15000@cluster0.gcwwvrl.mongodb.net/food-del').then(()=>console.log('DB Connected'))
// }
