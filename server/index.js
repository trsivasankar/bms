const express = require('express');
const mongoose = require('mongoose');
const useRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/api/users', useRoutes);


app.listen(8081, () => {
    console.log('server is running');
})

const dburl = 'mongodb+srv://trsivasankar:adsankar@cluster0.i7wujxr.mongodb.net/scaler?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(dburl).then(function (connection) {
    console.log('DB connected');
}).catch(err => {
    console.log(err);
})