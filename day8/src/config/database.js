const mongoose = require('mongoose');

const dbConnect = ()=>{
    mongoose.connect('mongodb+srv://sumansmc546_db_user:pk8CyrePvsxQWowi@cluster0.qxwfn0s.mongodb.net/day8')
    .then(()=>
    {
        console.log('Db connected sucessfully')
    })
}

module.exports = dbConnect;