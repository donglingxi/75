const express = require('express');
const app = express();
const port = 4321;

app.get('/', (req, res) => {
    res.send('hellow world');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})