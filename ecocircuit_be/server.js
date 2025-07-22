import  cors from "cors"
import mongoose from "mongoose"
import { resolve } from "path";
import authRoutes from "./routes/auth.js"
import express from "express"
import bodyParser from "body-parser"

import * as dotenv from "dotenv"

dotenv.config({ path: resolve("./.env") });  // Force dotenv to load .env

// console.log("Database URL:", process.env.DATABASE_URL);

// console.log(process.env.SECRET_KEY)
const databaseurl = process.env.DATABASE_URL

const app = express();

<<<<<<< HEAD
const PORT = 5002;
=======
const PORT = process.env.PORT | 5000;
>>>>>>> b0d0e9799eacd8eb01ff260a96fdc6cafc25891d


async function main ()
{
  if (!databaseurl) {
    console.error(" DATABASE_URL is not defined. Check your .env file.");
    process.exit(1); 
}

await mongoose.connect(databaseurl, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(" Database Connected Successfully");

app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
});

}
main()

app.use(cors());
app.use(bodyParser.json());
app.use("/", authRoutes);

