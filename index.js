const express = require('express');
const cors = require('cors');


const UserRouter = require("./Routers/userRouter");

const port = 5000;

//initialize express app
const app = express();

// middleware
app.use(express.json());
app.use(cors({
    origine: ['http://localhost:5173']
}));

app.use('/user' , UserRouter );

// Router
app.get('/', (req, res)=> {
    res.send('Response from express server')
});

app.get('/add',(req, res)=> {
    res.send('Response from add route');
});

app.get('/getall',(req, res)=> {
    res.send('Response from getall');
});

app.get('/getbyid',(req, res)=> {
    res.send('Response from getbyid');
});

app.get('/update',(req, res)=> {
    res.send('Response from update');
});

app.get('/delete',(req, res)=> {
    res.send('Response from delete');
});



app.listen(port, () => { console.log('server started')});