import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const connectDB = async () => {
  
  try {
    await mongoose.connect(
      process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    console.log('Conectado a la base de datos de MongoDb')
  } catch (error) {
    console.log('Error al conectar con la base de datos: ' + error);
  }
}