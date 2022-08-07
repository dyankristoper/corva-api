const express = require('express');
const app  = express();
const PORT = process.env.PORT || 8000;

/* Routers */
const shallowCoralRouter = require('./routes/corals');

app.get('/', (request,response)=>{ response.send(`API running!`); })

// Routes
app.use('/api/v1/shallow-coral', shallowCoralRouter );
 
app.listen( PORT , () => { console.log(`App is running on port ${PORT}`); })