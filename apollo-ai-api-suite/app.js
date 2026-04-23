const express = require('express');
const app = express();
app.use(express.json());

// Import route files
const statusRoutes = require('./api/status');
const summarizeRoutes = require('./api/summarize');
const qrRoutes = require('./api/qr');

// Use routes
app.use('/api', statusRoutes);
app.use('/api', summarizeRoutes);
app.use('/api', qrRoutes);

// Health endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'API operational' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});