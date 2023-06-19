
import  express  from "express";
import  dotenv  from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors"
import auth from "./routes/auth.js"
import  form  from "./routes/form.js";
dotenv.config()
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT||8000 ;

app.use('/api/v1/auth',auth)
app.use('/api/v1/auth/form',form)
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`.bgCyan.white);
})