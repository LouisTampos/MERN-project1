import mongoose from "mongoose"

export const connectDB = async () => {
    try {
      await mongoose.connect("mongodb+srv://tamposvictorlouis_db_user:dqOWxA8yFKPsxxfb@cluster0.jtybuvt.mongodb.net/?appName=Cluster0")
      
      console.log("MONGODB CONNECTED SUCCESSFULLY!")
    } catch (error) {
      console.error("Error connecting to MONGODB", error);
    }
}