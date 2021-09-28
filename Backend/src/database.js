import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/mern-graphql", (err) => {
    if(err) throw err;
    console.log('DB is connected')
})