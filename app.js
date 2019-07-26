const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello NodeJS');
});

app.listen(3030, ()=>{
    console.log('server started at 3030 port');
});