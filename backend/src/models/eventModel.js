const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(__dirname + '/../../events.db');

db.run(`CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  date TEXT,
  description TEXT,
  link_token TEXT,
  expires_at TEXT
)`);

module.exports = db;
