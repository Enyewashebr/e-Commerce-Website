import express from 'express';
import cors from 'cors';
import 'dotenv/config'
// import { connect } from 'http2';
import connectDB from './config/mongodb';
import connectCloudinary from './config/cloudinary';



// App configuration

const app = express();
const PORT = process.env.PORT || 9000;
connectDB();
connectCloudinary();
// Middlewares
app.use(express.json());
app.use(cors());


// api endpoints

app.get('/', (req, res) => {
    res.send('Welcome to Enex Boutique Backend!');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
