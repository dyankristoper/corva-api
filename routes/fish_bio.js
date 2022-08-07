const connection = require('../config');
const express = require('express');
const router  = express.Router();

const DB_NAME = 'fish_bio';

router.get('/:id', ( request, response ) => {
    connection.query(`SELECT * FROM ${DB_NAME} WHERE loc_id = ${request.params.id}` , ( err, data ) => {
        const fishBioData = [
           { 'type': 'Benthic Invertivore',  'mpa': data.live_coral },
          
        ];

        response.send( coralData );
    });
});

module.exports = router;
