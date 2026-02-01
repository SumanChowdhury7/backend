const app = require('./src/app.js');
const mongoose = require('mongoose');

const connectToDb = ()=>{
mongoose.connect('mongodb+srv://sumansmc546_db_user:pk8CyrePvsxQWowi@cluster0.qxwfn0s.mongodb.net/day6')
.then(()=>{
    console.log("Connected to DB")
})

}

connectToDb();0
3+



app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})