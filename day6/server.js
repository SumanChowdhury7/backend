const app = require('./src/app.js');
const mongoose = require('mongoose');

const connectToDb = ()=>{
mongoose.connect('')
.then(()=>{
    console.log("Connected to DB")
})

}

connectToDb();



app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})
