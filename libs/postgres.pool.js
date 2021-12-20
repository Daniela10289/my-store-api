const { Pool } = require('pg');

const { config } = require('./../config/config');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'dani',
  password: 'admin123',
  database: 'my_store'
});

module.exports = pool;


