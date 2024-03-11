import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/Graphql')
.then(()=>{console.log('db connected')})
.catch(()=>{console.log("error occured!!")})