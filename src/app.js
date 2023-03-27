const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const routes=require('../src/routers/mensRoutes');
const DB=require('../src/db/dbconnect')

const port=process.env.PORT || 3000

const DATABASE_URL=process.env.DATABASE_URL;

DB(DATABASE_URL);

app.use(express.json());

app.use('/api',routes)

app.listen(port,()=>{
    console.log(`Listening to port ${port}.`)
})
