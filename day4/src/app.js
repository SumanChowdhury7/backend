const express = require('express');
const app = express();
app.use(express.json());

const note = []

app.get('/',(req,res)=>{
res.send('Hello World');
})

app.post('/notes',(req,res)=>{
console.log(req.body);
note.push(req.body)
console.log(note);
res.send('notes created successfully');
})

app.get('/notes',(req,res)=>{
res.send(note);
})

app.delete('/notes/:index', (req,res)=>{
    delete note[req.params.index];
    res.send('note deleted successfully');
    console.log(req.params.index);

})

app.patch('/notes/:index',(req,res)=>{
note[req.params.index].description = req.body.description;
res.send('Note updated successfully');
})

module.exports = app;