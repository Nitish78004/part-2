import mongoose from "mongoose"
export const dbConnect = async () => {
    const con = await mongoose.connect('mongodb+srv://nknitishsingh92_db_user:Nitish780045@clusterone.7zg3loj.mongodb.net/')
    if (con) {
        console.log("Db connected sucessfully.........")
    }
}
