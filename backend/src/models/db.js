const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER || 'valuser',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'valdb',
  password: process.env.PGPASSWORD || 'valpass',
  port: process.env.PGPORT ? parseInt(process.env.PGPORT) : 5432,
});

module.exports = pool;
