var express = require('express');
var router = express.Router();

const db = require('../db.js')

/* GET users listing. */
router.get('/', function (req, res, next) {

    db.query('SELECT * From patient', (err, rows, fields) => {
        if (err) throw err
        console.log(rows)
    })

    res.send('respond with a resource');

    //connection.end()
});

module.exports = router;
