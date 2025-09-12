// Removed leftover line from previous SQLite code
const pool = require('./db');

async function createTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        date DATE,
        description TEXT,
        link_token VARCHAR(255),
        expires_at TIMESTAMP
      )
    `);
    console.log('Events table ensured.');
  } catch (err) {
    console.error('Error creating events table:', err);
  }
}
createTable();

module.exports = pool;
