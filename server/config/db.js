const mongoose = require('mongoose')

const ConnectDB = async ()=>{
    try {
        await mongoose.connect(process.env.Mongo_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected successfully')
    } catch (error) {
        console.error("MongoDB failed to Connect", error)
    }
} 

module.exports = ConnectDB;