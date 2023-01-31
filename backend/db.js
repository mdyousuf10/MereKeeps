const mongoose = require('mongoose')
const mongoURI='mongodb://127.0.0.1:27017/inotebook'


mongoose.set('strictQuery', false);
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Conncted to Mongo Successfully")
    })
}

module.exports = connectToMongo;