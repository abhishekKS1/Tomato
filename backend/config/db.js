import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://Mongothor:Mongothor15000@cluster0.gcwwvrl.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0")).then(()=>console.log('DB Connected'))
}


// export const connectDB = async ()=>{
//     await mongoose.connect('mongodb+srv://Mongothor:Mongothor15000@cluster0.gcwwvrl.mongodb.net/food-del').then(()=>console.log('DB Connected'))
// }
