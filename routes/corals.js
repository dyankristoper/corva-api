const connection = require('../config');
const express = require('express');
const router  = express.Router();

const DB_NAME = 'coral_shallow';

router.get('/:id', ( request, response ) => {
    /* Date time logs of requests */
    console.log(`GET -- /${request.params.id} | ${ new Date() }`);

    // connection.query(`SELECT * FROM ${DB_NAME} WHERE loc_id = ${request.params.id}` , ( err, data ) => {
    //     const coralData = [
    //        { 'Type': 'Hard Coral', 'Count': data.HC_cover },
    //        { 'Type': 'Algal Assemblage', 'Count': data.AA_cover },
    //        { 'Type': 'Abiotic',          'Count': data.AB_cover },
    //        { 'Type': 'Macroalgae',       'Count': data.MA_cover },
    //        { 'Type': 'Halimeda',    'Count': data.HA_cover },
    //        { 'Type': 'Other Biota', 'Count': data.OB_cover },
    //     ];

    //     response.send( coralData );
    // });

    
    connection.connect( (err) => {
        if(err){ console.log(err); }
    });

    const query = `SELECT 1 + 1 AS Result`;
    connection.query( query, ( err, result ) => {
        console.log( result );
    });

    connection.end();
});

module.exports = router;