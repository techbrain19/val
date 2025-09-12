const db = require('../models/eventModel');
const { v4: uuidv4 } = require('uuid');

exports.createEvent = (req, res) => {
  const { name, date, description } = req.body;
  const link_token = uuidv4();
  const expires_at = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
  db.run(
    `INSERT INTO events (name, date, description, link_token, expires_at) VALUES (?, ?, ?, ?, ?)`,
    [name, date, description, link_token, expires_at],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID, link: `/api/events/link/${link_token}` });
    }
  );
};

exports.getEventByToken = (req, res) => {
  const { token } = req.params;
  db.get(
    `SELECT * FROM events WHERE link_token = ? AND expires_at > ?`,
    [token, new Date().toISOString()],
    (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!row) return res.status(404).json({ error: 'Link expired or not found' });
      res.json(row);
    }
  );
};
