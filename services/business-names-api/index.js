const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Basic name generation function
const generateBusinessNames = (keywords = '') => {
  const prefixes = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Nova', 'Quantum'];
  const suffixes = ['Labs', 'Tech', 'Solutions', 'Systems', 'Innovations', 'Hub'];
  
  return keywords.split(',')
    .filter(k => k.trim())
    .flatMap(keyword => 
      prefixes.map(p => `${p}${keyword}${suffixes[Math.floor(Math.random() * suffixes.length)]}`)
    )
    .slice(0, 10);
};

app.get('/generate', (req, res) => {
  try {
    const keywords = req.query.keywords || '';
    const names = generateBusinessNames(keywords);
    res.json({ success: true, names });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Business Names API running on port ${port}`);
});