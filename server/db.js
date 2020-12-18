const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'Cherry105',
    host: 'localhost',
    port: 5432,
    database: 'sia_best'
});

module.exports = pool;
