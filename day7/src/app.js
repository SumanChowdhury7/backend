const express = require('express');
const app = express();
const noteModel = require('./models/notes.model')
app.use(express.json());

app.post('/notes',async (req,res)=>{
const {title, description} = req.body

const note = await noteModel.create({
    title,description
})

res.status(201).json({
    message: "Note created!",
    data: note
})
})

app.get('/notes', async (req,res)=>{
const note =  await noteModel.find();

res.status(200).json({
    data: note
})
})


module.exports = app;