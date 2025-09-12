const express = require('express');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Health check and root route
app.get('/', (req, res) => {
	res.json({ status: 'ok', message: 'Event API is running.' });
});

app.use('/api/events', eventRoutes);

// Error handler middleware
app.use((err, req, res, next) => {
	console.error('Internal error:', err);
	res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
