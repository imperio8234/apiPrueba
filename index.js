const express = require('express');
const app = express();

app.use('/', (req, res) =>{
    res.json({
        mensaje: "hola"
    })
})
app.listen(3000, () => {
    console.log("servidor en el 3000");
})