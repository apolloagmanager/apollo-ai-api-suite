const express = require('express');
const statusRouter = require('./status');

const app = express();

// Import API routers
const summarizationRouter = require('./summarization');
const sentimentRouter = require('./sentiment');

// Middleware
app.use(express.json());

// Routes
app.use('/summarize', summarizationRouter);
app.use('/sentiment', sentimentRouter);
app.use('/status', statusRouter);  // Add status endpoint

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});