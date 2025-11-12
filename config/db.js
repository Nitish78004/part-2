import mongoose from "mongoose"
export const dbConnect = async () => {
    const con = await mongoose.connect('mongodb://localhost:27017/Quirex')
    if (con) {
        console.log("Db connected sucessfully.........")
    }
}