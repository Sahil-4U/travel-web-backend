import express from 'express';





const app = express();


// api routes
app.get('/', (req, res) => {
    return res.send('<center><h1>Welcome to server side</h1></center>');
})


const PORT = 4000;

// server listning
app.listen(PORT, () => {
    console.log('server is listning at', `http://localhost:${PORT}/`);
})