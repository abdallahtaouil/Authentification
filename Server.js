const express = require("express");
const connectDb = require("./config/config");
const userRouter = require("./router/Router");
const cors=require('cors')
const app = express();
const port = 8000;
connectDb();
app.use(express.json())//accept requests with type json 
app.use(cors({origin:'http://localhost:3000'}))
app.use('/user',userRouter)
app.listen(port,console.log('Server is running at port 8000'));
