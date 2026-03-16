const express = require('express');
const app = express();
const noteModel = require('./models/notes.models');
app.use(express.json());

app.post('/notes', async (req,res)=>{
const {title, description} = req.body;

const note = await noteModel.create({
    title,description
})
res.status(201).json({
    message: "Created Sucessfully",
    data: note
})
})


app.get('/notes', async (req,res)=>{
const note = await noteModel.find();

res.status(200).json({
    message: "Fetched sucessfully",
    data: note
})
})



module.exports = app;