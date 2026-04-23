const summarizeText = require('../../lib/summarize');

module.exports = async (req, res) => {
  try {
    const { text, maxLength = 120 } = req.body;
    if (!text) return res.status(400).json({ error: 'Text parameter required' });
    
    const summary = await summarizeText(text, parseInt(maxLength));
    res.json({ summary });
  } catch (error) {
    res.status(500).json({ error: 'Summarization failed', details: error.message });
  }
};