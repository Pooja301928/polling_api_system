const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/polling_api_system');

const connectParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
}





const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;
