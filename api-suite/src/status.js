const express = require('express');
const router = express.Router();

let requestCount = 0;

// Simple status endpoint
router.get('/', (req, res) => {
  requestCount++;
  res.json({
    status: 'operational',
    uptime: process.uptime(),
    version: process.env.npm_package_version || '1.0',
    requestCount
  });
});

module.exports = router;