// index.js
const express = require('express');
var cors = require('cors')

const fs = require('fs');
const app = express();
require('dotenv').config()

const port = process.env.PORT || 8008;
const host = process.env.HOST;

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/users', (req, res) => {
    const dirname = '/home/';
    var filelist = "";
    fs.readdir(dirname, (err, files) => {
        
    if (err) {
        console.error('Error reading directories:', err);
        return;
    }
        filelist = files;
        res.send(filelist);
        //comma separated list of user directories.
    })
})



app.listen(port, host,  () => {
    console.log(`Example app listening at http://${host}:${port}`);
    //console.log(readDirForList('/home/dave'));
});
