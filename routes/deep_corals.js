const connection = require('../config');
const express = require('express');
const router  = express.Router();

const DB_NAME = 'coral_deep';

router.get('/:id', ( request, response ) => {
    console.log(`GET -- ${request.baseUrl}`);
    connection.query(`SELECT * FROM ${DB_NAME} WHERE loc_id = ${request.params.id}` , ( err, data ) => {
        const coralData = [
           { 'Type': 'Live COral',  'Count': data.live_coral },
           { 'Type': 'Sand/Rubble', 'Count': data.sand_rubble },
           { 'Type': 'Dead Coral',  'Count': data.dead_coral },
           { 'Type': 'Other',       'Count': data.other }
        ];

        response.send( coralData );
    });
});

module.exports = router;
