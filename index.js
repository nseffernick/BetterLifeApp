const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')

const app = express();

/*
app.get('/', (req, res) => {
    //res.send('Hello World!!');
    //res.sendFile(path.join(__dirname, 'index.html')); only one page
    

});
*/


app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Static folder set
//app.use(express.static(path.join(__dirname, 'A_Folder_Here')))

//Member Route call
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started with port ${PORT}`) );

