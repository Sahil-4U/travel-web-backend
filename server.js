import express from 'express';
import dBconnection from './dBconnect.js';
import UserRoutes from './routes/UserRoutes.js';
import dotenv from "dotenv";
dotenv.config();





const app = express();
// middle ware
app.use(express.json());
// Routes for different endpoints 
app.use('/user', UserRoutes);



// api routes
app.get('/', (req, res) => {
    return res.send('<center><h1>Welcome to server side</h1></center>');
})



// server listning
app.listen(process.env.PORT, () => {
    console.log('server is listning at', `http://localhost:${process.env.PORT}/`);
})