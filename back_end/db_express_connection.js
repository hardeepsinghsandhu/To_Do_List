const Pool = require('pg').Pool

const pool = new Pool({
    user: "lazy_boy",
    password: "lazy_boy",
    host: "localhost",
    database: "to_do_list_db",
    port: 5432
})

module.exports = pool;