const express = require('express');
const route = express.Router();
route.get('/print', (req,res) => {
    console.log(req.query.value);
    res.send('localhost:3000/');
});

route.listen(5000);
