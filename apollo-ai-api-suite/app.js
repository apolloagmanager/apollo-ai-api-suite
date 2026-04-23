const express = require('express');
const app = express();
app.use(express.json());

// Import route files
const statusRoutes = require('./api/status');
const summarizeRoutes = require('./api/summarize');
const qrRoutes = require('./api/qr');
const sentimentRoutes = require('./api/sentiment');
const classifyRoutes = require('./api/classify');

// Use routes
app.use('/api', statusRoutes);
app.use('/api', summarizeRoutes);
app.use('/api', qrRoutes);
app.use('/api', sentimentRoutes);
app.use('/api', classifyRoutes);

// Health endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'API operational' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});