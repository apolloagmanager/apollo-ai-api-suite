const express = require('express');
const router = express.Router();
const Sentiment = require('sentiment');

const sentiment = new Sentiment();

router.post('/sentiment', (req, res) => {
    const { text } = req.body;
    
    if (!text) {
        return res.status(400).json({ error: 'Text is required in the request body.' });
    }
    
    try {
        const result = sentiment.analyze(text);
        res.json({
            sentiment: result.score,
            comparative: result.comparative,
            tokens: result.tokens,
            words: result.words,
            positive: result.positive,
            negative: result.negative
        });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while processing the sentiment analysis.' });
    }
});

module.exports = router;