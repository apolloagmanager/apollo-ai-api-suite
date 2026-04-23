const express = require('express');
const router = express.Router();
const natural = require('natural');
const { WordTokenizer } = natural;
const tokenizer = new WordTokenizer();

// Sample training data for classification
const trainingData = [
  { text: 'I love this product', category: 'positive' },
  { text: 'This is amazing', category: 'positive' },
  { text: 'Worst experience ever', category: 'negative' },
  { text: 'I hate this service', category: 'negative' },
  { text: 'How do I reset my password?', category: 'support' },
  { text: 'Need help with billing', category: 'support' },
];

// Train classifier
const classifier = new natural.BayesClassifier();
trainingData.forEach(item => {
  classifier.addDocument(tokenizer.tokenize(item.text), item.category);
});
classifier.train();

// Classification endpoint
router.post('/classify', (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text parameter is required' });
    }
    
    const tokens = tokenizer.tokenize(text);
    const classification = classifier.classify(tokens);
    
    res.json({
      text,
      classification,
      confidence: classifier.getClassifications(tokens)
    });
  } catch (error) {
    console.error('Classification error:', error);
    res.status(500).json({ error: 'Classification failed' });
  }
});

module.exports = router;