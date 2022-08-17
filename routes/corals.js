const connection = require('../config');
const express = require('express');
const router  = express.Router();

const CORAL_DB_NAME = 'coral_shallow';

router.get('/:id/year', (request, response) => {
    /* Date time logs of requests */
    console.log(`GET -- /${request.params.id}/year | ${ new Date() }`);

    connection.connect( (err) => {
        if(err){ console.log(err); }
    });

    const query = `SELECT monitor_year FROM ${ CORAL_DB_NAME } WHERE loc_id = ${ request.params.id }`;
    connection.query( query, ( err, result ) => {
        if(err){
            response.send({  error: -9999 });
        }else{
            response.send( result );
        }
    });

    // connection.end();
});

router.get('/:id/:year', ( request, response ) => {
    /* Date time logs of requests */
    console.log(`GET -- /${request.params.id}/${request.params.year} | ${ new Date() }`);

    connection.connect( (err) => {
        if(err){ console.log(err); }
    });
    
    const query = `SELECT * FROM ${ CORAL_DB_NAME } WHERE loc_id = ${ request.params.id } AND monitor_year = ${ request.params.year }`;
    connection.query( query , ( err, results ) => {
        console.log( results );
        console.log( results.length );
        if( results.length > 0 ){
            const data = results[0];
            const coralData = [
               { 'Type': 'Hard Coral', 'Count': data.HC_cover },
               { 'Type': 'Algal Assemblage', 'Count': data.AA_cover },
               { 'Type': 'Abiotic',          'Count': data.AB_cover },
               { 'Type': 'Macroalgae',       'Count': data.MA_cover },
               { 'Type': 'Halimeda',    'Count': data.HA_cover },
               { 'Type': 'Other Biota', 'Count': data.OB_cover },
            ];
    
            response.send( coralData );
        }

        response.send({ error: -9999 });
    });

    // connection.end();
});

module.exports = router;