import dotenv from 'dotenv';

dotenv.config();

export default {
  JWT_SECRET: process.env.JWT_SECRET,
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
  MONGO_URI: "mongodb+srv://niralibaria123:Nirali@cluster0.vyrr0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
};
