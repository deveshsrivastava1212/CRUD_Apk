const exp = require("constants");
const express = require("express");
require('./db/conn');
const user = require("./routers/user");
const dotenv = require("dotenv")
dotenv.config();


const port = process.env.PORT ||3005;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/user', user);

app.listen(port,()=> {
    console.log(`Server is running on port ${port}`);
    console.log(`URL: http://localhost:${port}`)
})
