const express = require('express');
const app  = express();
const PORT = process.env.PORT || 8000;

app.get('/', (request,response)=>{ response.send(`API running!`); })

app.listen( PORT , () => { console.log(`App is running on port ${PORT}`); })