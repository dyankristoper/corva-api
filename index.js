const express = require('express');
const app  = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;

/* Middlewares */
app.use(cors());

/* Routers */
const shallowCoralRouter = require('./routes/corals');

app.get('/', (request,response)=>{ response.send(`API running!`); })

// Routes
app.use('/api/v1/shallow-coral', shallowCoralRouter );
 
app.listen( PORT , () => { console.log(`App is running on port ${PORT}`); })