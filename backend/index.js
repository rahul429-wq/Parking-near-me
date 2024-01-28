const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.json({msg:"hello world"});
})

app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT }`);
});