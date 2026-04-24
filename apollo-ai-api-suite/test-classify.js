const express = require('express');
const app = express();
app.use(express.json());

// Import our classifier route
const classifyRoutes = require('./api/classify');
app.use('/api', classifyRoutes);

// Test endpoint
app.get('/test', (req, res) => {
  const testCases = [
    "I love this amazing product!",
    "Terrible service, never using again",
    "How do I cancel my subscription?"
  ];
  
  const results = testCases.map(text => {
    const tokens = require('natural').WordTokenizer().tokenize(text);
    return {
      text,
      classification: classifyRoutes.classifier.classify(tokens)
    };
  });
  
  res.json(results);
});

// Start test server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
  console.log(`Access test at: http://localhost:${PORT}/test`);
});