const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// In-memory usage metrics (for real-time stats)
const usageStats = {
  total: {
    calls: 0,
    tokens: 0
  },
  byStyle: {
    paragraph: 0,
    bullets: 0,
    executive: 0
  }
};

// Persistent log file
const logDir = path.join(__dirname, '..', 'logs');
const logFile = path.join(logDir, 'usage.log');

// Ensure log directory exists
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
  fs.writeFileSync(logFile, 'timestamp,requestId,operation,style,length,chars,tokens\n');
}

module.exports = {
  track: async (operation, data) => {
    // Update in-memory stats
    usageStats.total.calls++;
    usageStats.total.tokens += data.tokens;
    usageStats.byStyle[data.style] = (usageStats.byStyle[data.style] || 0) + 1;

    // Create log entry
    const requestId = crypto.randomBytes(4).toString('hex');
    const entry = [
      new Date().toISOString(),
      requestId,
      operation,
      data.style,
      data.length,
      data.chars,
      data.tokens
    ].join(',');

    // Append to log file
    fs.appendFile(logFile, entry + '\n', (err) => {
      if (err) console.error('[Analytics] Failed to log:', err);
    });

    return requestId;
  },

  getStats: () => {
    return {
      ...usageStats,
      avgTokensPerCall: usageStats.total.calls > 0 
        ? Math.round(usageStats.total.tokens / usageStats.total.calls) 
        : 0
    };
  }
};
