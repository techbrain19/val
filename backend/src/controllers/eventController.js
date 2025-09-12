const db = require('../models/eventModel');
const { v4: uuidv4 } = require('uuid');

exports.createEvent = async (req, res) => {
  const { name, date, description } = req.body;
  const link_token = uuidv4();
  const expires_at = new Date(Date.now() + 24 * 60 * 60 * 1000);
  try {
    const result = await db.query(
      'INSERT INTO events (name, date, description, link_token, expires_at) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [name, date, description, link_token, expires_at]
    );
    res.json({ id: result.rows[0].id, link: `/api/events/link/${link_token}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEventByToken = async (req, res) => {
  const { token } = req.params;
  try {
    const result = await db.query(
      'SELECT * FROM events WHERE link_token = $1 AND expires_at > $2',
      [token, new Date()]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Link expired or not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
