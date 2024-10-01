const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN
const options = {
    dbName: 'auth-db',
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

mongoose.connect(mongo_url,options)
    .then(()=>{
        console.log("MongoDB connected...");
    }).catch(err=>{
        console.log("MongoDB connection error: ",err);
    })